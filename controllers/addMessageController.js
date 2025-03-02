const db = require("../db/queries");

const addMessageController = {
  addMessagePost: async (req, res) => {
    // first find out the user id
    const { creatorId, message } = req.body;
    // console.log(req.body);
    await db.createMessage(+creatorId, message);
    res.send("message added");
  },
};
module.exports = addMessageController;
