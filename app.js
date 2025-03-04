const express = require("express");
const rootRouter = require("./routes/rootRouter");
const app = express();
const path = require("path");
const signupRouter = require("./routes/signupRouter");
require("dotenv").config();

app.use(express.json());
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/", rootRouter);
app.use("/signup", signupRouter);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`);
});
