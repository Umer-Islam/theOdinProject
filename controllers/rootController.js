const rootController = {
  rootGet: (req, res) => {
    res.render("index", { user: req.user });
  },
  rootPost: (req, res) => {
    res.send("root post route");
  },
};
module.exports = rootController;
