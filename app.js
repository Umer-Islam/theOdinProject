const express = require("express");
const app = express();
const fs = require("node:fs");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

app.use("/public", express.static("public"));

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);

app.listen(PORT, () => {
  console.log(`\n Server started on: http://localhost:${PORT}`);
});
