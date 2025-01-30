const {Router} = require('express')
const newRouter = Router()
const {newGet,newPost} = require('../controllers/newController')
newRouter.get('/',newGet)
newRouter.post('/',newPost)


module.exports = newRouter;