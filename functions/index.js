const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const app = require("express")();

const firebaseConfig = {
  apiKey: "AIzaSyAuxwaJj_axUbxU60V6fE-DwxJ3r9l7U-Y",
  authDomain: "ski-service-91995.firebaseapp.com",
  databaseURL: "https://ski-service-91995.firebaseio.com",
  projectId: "ski-service-91995",
  storageBucket: "ski-service-91995.appspot.com",
  messagingSenderId: "909321376334",
  appId: "1:909321376334:web:d427cc7e65c291841b291f",
  measurementId: "G-SYH1NLPPCL",
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const cors = require("cors");
const {
  user,
} = require("firebase-functions/lib/providers/auth");
app.use(cors());

const db = admin.firestore();

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

  db.collection("orders")
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

// signup
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  let token;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ handle: `nazwa jest już zajęta` });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
          );
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((token) => {
      token = token;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };

      return db
        .doc(`/users/${newUser.handle}`)
        .set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

exports.api = functions
  .region("europe-west3")
  .https.onRequest(app);

// odpalić funkcje w panelu na stronie
// odpalić baze w panelu na stronie
