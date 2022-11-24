const User = require("../../../Model/user");
const bcrypt = require("bcrypt");
const api_key = "ada43c3e2c89f0331f8a9a687a7092fc-1b3a03f6-4f9f3d20";
const domain = "sandbox2372eb2d07c64f558e1aa492ad8eed8f.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const Signup = async (req, res, next) => {
  let otpcode = Math.floor(Math.random() * 1000 + 3689);
  res.send({ code: otpcode });
  let data = {
    from: "faseehsiddiqui564@gmail.com",
    to: `${req.body.Email}`,
    subject: "please enter the code ",
    text: `${otpcode}`,
  };

  await mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log("successful");
    }
  });
  const user = await new User({
    Email: req.body.Email,
    Password: otpcode,
  }).save();
  // User.create({ Email: req.body.data.Email, Password: otpcode }).save();
  // let { First_Name, Last_Name, User_Name, Email, Password } = req.body;
  // if (!First_Name || !Last_Name || !User_Name || !Email || !Password) {
  //   return res.status(422).json("please  fill the inputs");
  // } else {
  //   const sameEmail = await User.findOne({ Email: Email });
  //   if (sameEmail) {
  //     return res.status(200).json("user already exist");
  //   } else {
  //     Password = bcrypt.hashSync(Password, 10);
  //     const user = new User({
  //       First_Name,
  //       Last_Name,
  //       User_Name,
  //       Email,
  //       Password,
  //     });
  //     try {
  //       await user.save();
  //       res.send({ mxg: "signup successfully" });
  //     } catch (error) {
  //       console.log(error);
  //       res.send(error);
  //     }
  //   }
  // }

  next();
};
module.exports = Signup;
