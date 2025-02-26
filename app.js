const express = require("express");
const rootRouter = require("./routes/rootRouter");
const app = express();








app.use('/',rootRouter)

const port = 2121 || process.env.PORT;

app.listen(port, () => {
  console.log(`servers started on: ${port}`);
});
