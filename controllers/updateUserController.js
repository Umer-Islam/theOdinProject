const db = require("../db/queries");

require("../app");
const updateUserController = {
  updateUserGet: (req, res) => {
    
    const user = req.user;
    res.render("updateUser", { user });
  },
  updateUserPost: async (req, res) => {
    const { passcode, user_id } = req.body;
    // console.log("user id is: " + user_id);
    if (passcode === "hehe") {
      await db.makeExclusive(parseInt(user_id));
      res.redirect('/')
    } else {
      res.redirect('/update-status')
    }
  },
};

module.exports = updateUserController;
