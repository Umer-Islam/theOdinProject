const db = require("../db/queries");

const makeAdminController = {
  makeAdminGet: async (req, res) => {
    res.render("makeAdmin", { user: req.user });
  },
  makeAdminPost: async (req, res) => {
    const { passcode, userId } = req.body;
    // console.log(passcode, userId);
    const user = await db.getUserById(+userId);
    const is_already_admin = user.is_admin;
    if (is_already_admin) {
      res.json({ error: "you are already admin" });
    } else if (passcode === "wabbalabbadubdub") {
      // use the query function to update is_admin to true
      // await db.makeAdmin(userId)
      res.send("passcode is correct");
    } else {
      res.send("incorrect passcode");
    }
  },
};
module.exports = makeAdminController;
