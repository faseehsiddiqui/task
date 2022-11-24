const express = require("express");
const dotnet = require("dotenv").config();
const route = require("./Route/auth");
const app = express();

const dbconnection = require("./DbConnection/db");
dbconnection();
app.use(express.json());

app.use(route);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`${port}`);
});
