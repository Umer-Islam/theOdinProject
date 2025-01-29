const express = require("express");
const app = express();
const fs = require("node:fs");
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const newController = require("./controllers/newController");

app.use("/public", express.static("public"));

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`\n Server started on: http://localhost:${PORT}`);
});
