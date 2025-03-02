require("../app");
const updateUserController = {
  updateUserGet: (req, res) => {
    console.log(req);
    res.render("updateUser");
  },
  updateUserPost: async (req, res) => {
    const { passcode } = req.body;
    console.log(passcode);
    console.log(req.user);
    res.send(`passcode entered is ${passcode}`);
  },
};

module.exports = updateUserController;
