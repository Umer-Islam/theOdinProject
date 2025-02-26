const rootController = {

rootGet: (req,res) => {
    res.render('index')
 },
 rootPost: (req,res) => {
res.send('root post route')
 }


}
module.exports = rootController