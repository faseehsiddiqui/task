const User = require("../../../Model/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const Login = async (req, res, next) => {
  let secretkey = "myeceretkey";
  let { Email, Password } = req.body;

  const sameEmail = await User.findOne({ Email: Email });
  if (!sameEmail) {
    res.send({ error: "you email is not registered" });
  } else if (sameEmail.Admin == true) {
    res.send({ Admin: "you have login admin" });
  } else {
    let matchpass = bcrypt.compareSync(Password, sameEmail.Password);
    if (matchpass) {
      let token = jwt.sign({ id: sameEmail._id }, secretkey);
      res.send({ mxg: "login successfully", token: token });
    } else {
      res.send({ error: "incorrect password" });
    }
  }
  next();
};
module.exports = Login;
