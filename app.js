const express = require("express");
const rootRouter = require("./routes/rootRouter");
const path = require("path");
const signupRouter = require("./routes/signupRotuter");
const app = express();

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", rootRouter);
app.use("/signup", signupRouter);
const port = 2121 || process.env.PORT;

app.listen(port, () => {
  console.log(`servers started on: ${port}`);
});
