//Firebase
const functions = require("firebase-functions");
const admin = require("firebase-admin");

//Express
const app = require("express")();
admin.initializeApp();

//Firebase
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

//CORS
const cors = require("cors");
const {
  user,
} = require("firebase-functions/lib/providers/auth");
app.use(cors());

//Just a shortcut
const db = admin.firestore();

//GET ORDERS
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

//POST ORDER
const FBAuth = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("Nie ma tokenu");
    return res
      .status(403)
      .json({ error: "Nieautoryzowane" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      console.log(decodedToken);
      return db
        .collection("users")
        .where("userId", "==", req.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      req.user.name = data.docs[0].data().name;
      return next();
    })
    .catch((err) => {
      console.error("Błąd podczas weryfikacji", err);
      return res.status(403).json(err);
    });
};

app.post("/order", FBAuth, (req, res) => {
  const newOrder = {
    name: req.user.name,
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

//SIGNUP

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    name: req.body.name,
    phone: req.body.phone,
  };

  let errors = {};
  let token, userId;

  if (isEmpty(newUser.email)) {
    errors.email = "Email is empty";
  } else if (!isEmail(newUser.email)) {
    errors.email = "Must be a valid email address";
  }
  if (!isEmpty(newUser.password))
    errors.password = "Password is empty";
  if (newUser.password !== newUser.confirmPassword)
    errors.confirmPassword = "Password must match";
  if (!isEmpty(newUser.name)) errors.name = "Name is empty";
  if (Object.keys(errors).length > 0)
    return res.status(400).json(errors);

  db.doc(`/users/${newUser.name}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ name: `nazwa jest już zajęta` });
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
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        createdAt: new Date().toISOString(),
        userId,
      };

      return db
        .doc(`/users/${newUser.name}`)
        .set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res
          .status(400)
          .json({ email: "Email already in use" });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
});

//LOGIN
app.post("/login", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  let errors = {};

  if (isEmpty(user.email))
    errors.email = "Nie może być puste";
  if (isEmpty(user.password))
    errors.password = "Nie może być puste";

  if (Object.keys(errors).length > 0)
    return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

//Server
exports.api = functions
  .region("europe-west3")
  .https.onRequest(app);
