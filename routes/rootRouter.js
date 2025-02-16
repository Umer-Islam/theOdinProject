const Router = require('express')
const rootRouter = Router()
const {get} = require('../controllers/rootController')

rootRouter.get('/',get)





module.exports = rootRouter