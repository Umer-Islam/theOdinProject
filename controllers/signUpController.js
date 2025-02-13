const path = require('path')
const pool = require('../db/pool')
const bcrypt = require('bcryptjs')
const signUpController = {
    get: (req, res, next) => {

        const filePath = path.parse(__dirname).dir
        res.render(filePath + "/views/sign-up-form.ejs")
    },
    post: async (req, res) => {
        const { username, password } = req.body
        console.log(req.body)
        console.log(`password before hashing: ${password}`)
        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            console.log(`password after hashing: ${hashedPassword}`)
            await pool.query(`insert into users (username , password) values ($1 , $2)`, [username, hashedPassword])
            res.redirect('/')
        } catch (err) {
            console.log("error" + err)
            res.status(500).send("internal server error")

        }
    }
}



module.exports = signUpController