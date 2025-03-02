const db = require("../db/queries");

const makeAdminController = {
  makeAdminGet: async (req, res) => {
    res.render("makeAdmin", { user: req.user });
  },
  makeAdminPost: async (req, res) => {
    const { passcode, userId } = req.body;
    // console.log(passcode, userId);
    if (passcode == "wabbalabbadubdub") {
      await db.makeAdmin(+userId);
      res.redirect("/");
    } else {
      res.json({ message: "try again" });
    }
  },
};
module.exports = makeAdminController;
