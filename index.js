const express = require("express");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});
app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/projects.html");
});

app.use((req, res) => res.status(404).sendFile(__dirname + "/404.html"));

app.listen(PORT, () => {
  console.log(`server started on port: http://localhost:${PORT}`);
});
