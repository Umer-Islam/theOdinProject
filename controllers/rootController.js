const db = require("../db/queries");

const rootController = {
  rootGet: async (req, res) => {
    const allMesages = await db.getAllMessages();
    console.log(allMesages.creatorId);
    console.log(req.user);

    res.render("index", {
      user: req.user,
      messages: allMesages,
      // is_admin: is_admin,
    });
  },
  rootPost: (req, res) => {
    res.send("root post route");
  },
};
module.exports = rootController;
