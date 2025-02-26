const express = require("express");
const rootRouter = require("./routes/rootRouter");
const path = require("path");
const signupRouter = require("./routes/signupRotuter");
const loginRouter = require("./routes/loginRouter");
const app = express();

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", rootRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
const port = 2121 || process.env.PORT;

app.listen(port, () => {
  console.log(`servers started on: http://localhost:${port}`);
});
