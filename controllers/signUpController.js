const path = require('path')
const db = require('../db/queries')

const signUpController = {

    get: async (req, res) => {
        const filePath = path.parse(__dirname).dir
        res.render(filePath + "/views/sign-up.ejs");
    },
    post: async (req, res,next) => {
        try {

            const { user_name, email, password, confirm_password, } = req.body;

            await db.addUser(user_name, email, password, confirm_password)

            res.redirect('/')
        } catch (error) {
            console.log(error)
            return next(error)
        }



    }
}

module.exports = signUpController