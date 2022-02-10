const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Blog',BlogPost)
