const express = require("express");
const route = express.Router();
const Signup = require("./MiddleWare/Registration/signUp");
const Login = require("./MiddleWare/Registration/login");

route.use(cors());
route.post("/", (req, res) => {
  console.log(req.body, "data found");
});
route.post("/signup", Signup);
route.post("/login", Login);
module.exports = route;
