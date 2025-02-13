const path = require('path')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategt = require('passport-local').Strategy
const signUpRouter = require('./routes/signUpRouter')
const pool = require('./db/pool')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const app = express()

app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")

app.use(express.static('public'))
app.use(express.json())
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }))
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))
passport.use(

    new LocalStrategt(async (username, password, done) => {
        try {
            const { rows } = await pool.query(`select * from users where username = $1`, [username])
            const user = rows[0]
            if (!user) {
                return done(null, false, { message: "incorrect username" })
            }
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                return done(null, false, { message: "incorrect password" })
            }
            return done(null, user)
        } catch (error) {
            return done(error)
        }

    })
);
passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await pool.query(`select * from users where id = $1`, [id])
        const user = rows[0]
        // console.log(user)
        done(null, user)
        // console.log('user is signed in')

    } catch (error) {
        done(error)
    }

})
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next()
})
app.get('/', async (req, res) => {

    res.render('index', { user: req.user })
})
app.post('/log-in',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/'
    })
)
app.get('/log-out', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})
app.use('/sign-up', signUpRouter)


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("something broke: Internal Server Error")
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})

