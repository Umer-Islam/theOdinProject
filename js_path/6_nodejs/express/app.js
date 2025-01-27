const express = require("express");
const app = express();
require('dotenv').config();
app.get("/", (req, res) => {
  // res.send("hello world!!!")
  res.send(
    `<h1 style="color:crimson">hello world!</h1>`
  );
  // console.log(req)
  // console.log(res)
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  // console.log(`using ${NODE_ENV} environment`)
  console.log(`server started on port: http://localhost:${PORT}`);
});
