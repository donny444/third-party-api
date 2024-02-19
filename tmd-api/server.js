const express = require("express");
const routes = require("./routes.js");

const app = express();

app.use("/", express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/tmd", routes);

app.listen(5000, () => console.log("Server is running on port 5000"));