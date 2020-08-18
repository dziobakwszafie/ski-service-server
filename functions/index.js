//Express
const app = require("express")();

//Firebase
const functions = require("firebase-functions");

//CORS
const cors = require("cors");
const {
  user,
} = require("firebase-functions/lib/providers/auth");
app.use(cors());

//Imports
const {
  getOrders,
  postOrder,
} = require("./handlers/orders");
const { signup, login } = require("./handlers/users");
const FBAuth = require("./util/fbAuth");

//Order routes
app.get("/orders", getOrders);
app.post("/order", FBAuth, postOrder);

//User routes
app.post("/signup", signup);
app.post("/login", login);

//Server
exports.api = functions
  .region("europe-west3")
  .https.onRequest(app);
