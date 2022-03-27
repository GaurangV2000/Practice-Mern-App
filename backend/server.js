const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./DB/conn.js");

require("./DB/conn");

app.use(express.json());
app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("this the Gaurang Page");
});

app.listen(5000, () => {
  console.log("the server nis running on port 5000");
});
