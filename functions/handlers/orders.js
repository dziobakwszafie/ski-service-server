const { db } = require("../util/admin");

exports.getOrders = (req, res) => {
  db.collection("orders")
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
      const resOrder = newOrder;
      resOrder.orderId = doc.id;
      res.json(resOrder);
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.getOrder = (req, res) => {
  let orderData = {};
  db.doc(`/orders/${req.params.orderId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Zamówienia nie znaleziono" });
      }
      orderData = doc.data();
      orderData.orderId = doc.id;
      return db
        .collection("comments")
        .orderBy("createdAt", "desc")
        .where("orderId", "==", req.params.orderId)
        .get();
    })
    .then((data) => {
      orderData.comments = [];
      data.forEach((doc) => {
        orderData.comments.push(doc.data());
      });
      return res.json(orderData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.commentOnOrder = (req, res) => {
  if (req.body.commentBody.trim() === "")
    return res.status(400).json({ error: "Pole nie może być puste" });

  const newComment = {
    commentBody: req.body.commentBody,
    createdAt: new Date().toISOString(),
    orderId: req.params.orderId,
    email: req.user.email,
  };
  console.log(newComment);

  db.doc(`/orders/${req.params.orderId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Zamówienia nie znaleziono" });
      }
      return db.collection("comments").add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Coś poszło nie tak" });
    });
};

exports.deleteOrder = (req, res) => {
  const document = db.doc(`/orders/${req.params.orderId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Zamówienie nie istnieje" });
      }
      if (doc.data().email !== req.user.email) {
        return res.status(403).json({ error: "Użytkownik niezalogowany" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Zamówienie usunięte" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
