const express = require('express')
const app = express()
const {rootGet} = require('./controllers/rootController')
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
const newRouter = require('./routes/newRouter')

const PORT = process.env.PORT || 3000

app.get('/',rootGet)
app.use('/new',newRouter)


app.listen(PORT,() => { 
    console.log(`server started on: http://localhost:${PORT}`)
 })