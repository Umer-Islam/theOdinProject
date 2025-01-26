let express = require("express");
const app = express();
const PORT = process.env.PORT || 2121;
app.get("/", (req, res) => {
  res.send({ hehe: "hehe" });
});
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
for (let i = 0; i < 10; i++) {
  console.log(`itteartion:${i}`);
}
