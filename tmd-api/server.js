require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");

const app = express();

app.use("/", express.static("public"));

app.use(express.json());

port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/tmd", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));