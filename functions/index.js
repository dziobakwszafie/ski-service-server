const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const express = require("express");
const app = express();

// Get orders
app.get("/orders", (req, res) => {
  admin
    .firestore()
    .collection("orders")
    .orderBy("name")
    .get()
    .then((data) => {
      let orders = [];
      data.forEach((doc) => {
        orders.push({
          orderId: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
          sideAngle: doc.data().sideAngle,
          bottomAngle: doc.data().bottomAngle,
          diamond: doc.data().diamond,
          snow: doc.data().snow,
          fluor: doc.data().fluor,
        });
      });
      return res.json(orders);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
});

// Post order
app.post("/order", (req, res) => {
  const newOrder = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    sideAngle: req.body.sideAngle,
    bottomAngle: req.body.bottomAngle,
    diamond: req.body.diamond,
    snow: req.body.snow,
    fluor: req.body.fluor,
    createdAt: new Date().toISOString(),
  };

  admin
    .firestore()
    .collection("orders")
    .add(newOrder)
    .then((doc) => {
      res.json({
        message: `document ${doc.id} created successfully`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "something went wrong" });
      console.error(err);
    });
});

// https://baseurl.com/api/

exports.api = functions
  .region("europe-west3")
  .https.onRequest(app);

// odpalić funkcje w panelu na stronie
// odpalić baze w panelu na stronie
