const {Router} = require('express')
const newRouter = Router()
const {newGet} = require('../controllers/newController')
newRouter.get('/',newGet)


module.exports = newRouter;