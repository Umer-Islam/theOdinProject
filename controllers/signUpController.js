const path = require('path')
const db = require('../db/queries')

const signUpController = {

get: async (req,res) => {
    const filePath = path.parse(__dirname).dir
    res.render(filePath + "/views/sign-up.ejs");
},
post: async (req,res) => {
    const {user_name,email,password,confirm_password,} = req.body;
    await db.addUser(user_name,email,password,confirm_password)
}
}

module.exports = signUpController