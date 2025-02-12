const express = require('express')
const app = express()
const { getGames, deleteGame } = require('./controllers/rootController');
const gameFormRouter = require('./routes/gameFormRouter')

require('dotenv').config();

const port = process.env.PORT || 2121;
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



app.get('/', getGames)
app.post('/',deleteGame)
app.use('/gameForm',gameFormRouter)


app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`)
})