const Account = require('../models/Account')

class SiteController{

    // GET /
    index(req,res,next){
        res.render('home')
    }
}

module.exports = new SiteController