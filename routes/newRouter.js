const {Router } = require('express')
const newRouter = Router()
const {getForm,postForm}= require('../controllers/newController')

// for /new 
newRouter.get('/',getForm)
newRouter.post('/',postForm)


module.exports = newRouter;