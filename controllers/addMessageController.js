const db = require("../db/queries");

const addMessageController = {
  addMessagePost: async (req, res) => {
    // first find out the user id
    const { creatorId, message } = req.body;
    // console.log(req.body);

    await db.createMessage(+creatorId, message);
    res.redirect("/");
  },
  deleteMessage: async (req, res) => {
    let { message_id } = req.body;
    message_id = +message_id;
    await db.deleteMessageById(message_id);

    res.redirect("/");
  },
};
module.exports = addMessageController;
