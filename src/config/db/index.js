const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/blog_project')
        console.log('Connect successfully!')
    }
    catch(err){
        console.log('Connect failure! Error: ' +err)
    }
}

module.exports = {connect}