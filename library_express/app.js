const express = require("express");
const app = express();
const fs = require("node:fs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(res.status(404))