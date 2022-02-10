const Blog = require('../models/Blog')
const {multipleMgToObj, mgToObj} = require('../../utils/mongoose')

class BlogController{

    // GET /blog/
    index(req,res,next){
        Blog.find({})
        .then(blogs=>{
            res.render('blogviews/blog', {
                blogs : multipleMgToObj(blogs)
            })
        })
    }

    // GET /blog/:id
    show(req,res,next){
        Blog.findOne({
            _id: req.params.id
        })
        .then(blog=>{
            res.render('blogviews/blogdetail',{
                blog : mgToObj(blog)
            })
        })
        .catch(err=>{
            res.status(500).send('Khong tim thay')
        })
    }
}

module.exports = new BlogController