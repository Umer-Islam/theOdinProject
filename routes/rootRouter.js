const {Router} = require('express')
const rootRouter = Router()
const {rootGet} = require('../controllers/rootController')
rootRouter.get('/',rootGet)

module.exports = rootRouter;