const express = require('express')
const app = express()
require('dotenv').config()
const rootRouter = require('./routes/rootRouter')
const signUpRouter = require('./routes/signUpRouter')


app.use(express.static('public'))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))

app.use('/', rootRouter)
app.use('/sign-up',signUpRouter)





const port = process.env.PORT || 2121;
app.listen(port, () => {


    console.log(`server started on: http://localhost:${port}`)
})