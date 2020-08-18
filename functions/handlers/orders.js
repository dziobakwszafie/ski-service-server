const { admin, db } = require("../util/admin");

exports.getOrders = (req, res) => {
  admin
    .firestore()
    .collection("orders")
    .orderBy("email")
    .get()
    .then((data) => {
      let orders = [];
      data.forEach((doc) => {
        orders.push({
          orderId: doc.id,
          email: doc.data().email,
          skis: doc.data().skis,
          length: doc.data().length,
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
};

exports.postOrder = (req, res) => {
  const newOrder = {
    email: req.user.email,
    skis: req.body.skis,
    length: req.body.length,
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
};
