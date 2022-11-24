const mongoose = require("mongoose");
const dotnet = require("dotenv").config();
const url = process.env.URL;
async function dbconnection() {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}
module.exports = dbconnection;
