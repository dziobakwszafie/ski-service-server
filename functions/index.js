//Express
const app = require("express")();

//Firebase
const functions = require("firebase-functions");
const FBAuth = require("./util/fbAuth");

//CORS
const cors = require("cors");
app.use(cors());

//Imports
const {
  getOrders,
  postOrder,
  getOrder,
  commentOnOrder,
  deleteOrder,
} = require("./handlers/orders");
const {
  signup,
  login,
  getAuthenticatedUser,
  addUserDetails,
} = require("./handlers/users");

//Order routes
app.get("/orders", getOrders);
app.post("/order", FBAuth, postOrder);
app.get("/order/:orderId", getOrder);
app.post("/order/:orderId/comment", FBAuth, commentOnOrder);
app.delete("/orders/:orderId/delete", FBAuth, deleteOrder);

//User routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

//Server
exports.api = functions.region("europe-west3").https.onRequest(app);
