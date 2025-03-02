const db = require("../db/queries");

const rootController = {
  rootGet: async (req, res) => {
    const allMesages = await db.getAllMessages();
    console.log(allMesages)
     

    res.render("index", {
      user: req.user,
      messages: allMesages,
    });
  },
  rootPost: (req, res) => {
    res.send("root post route");
  },
};
module.exports = rootController;
