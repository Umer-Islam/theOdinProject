const express = require('express')
const app = express()
const session = require('express-session')
require('dotenv').config()
const rootRouter = require('./routes/rootRouter')
const signUpRouter = require('./routes/signUpRouter')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "cats",
    resave: false,



}))

app.use(passport.session)
passport.use(
    new LocalStrategy(async (user_name, password, done) => {
        try {
            const { rows } = await pool.query(`select from users where name = $1`, [user_name])
            const user = rows[0];
            if (!user) {
                return done(null, false, { message: "incorrect username" })
            }
            if (user.password !== passport) {
                return done(null, false, { message: "incorrect password" })
            }
            return done(null, user)
        } catch (error) {
            return done(err)

        }

    })
)
passport.serializeUser(
    (user, done) => {
        done(null, user.id)
    }
)
passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await pool.query(`select * from users where id = $1`, [id])
        const user = rows[0];
        done(null, user)
    } catch (error) {
        console.log(error)
        done(error)
    }
})
app.use('/', rootRouter)
app.use('/sign-up', signUpRouter)





const port = process.env.PORT || 2121;
app.listen(port, () => {


    console.log(`server started on: http://localhost:${port}`)
})