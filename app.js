const express = require("express");
const rootRouter = require("./routes/rootRouter");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", rootRouter);

const port = 2121 || process.env.PORT;

app.listen(port, () => {
  console.log(`servers started on: ${port}`);
});
