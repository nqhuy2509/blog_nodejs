const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const path = require('path')
const db = require('./config/db')
const route = require('./routes')

const port = 3000

// Connect database
db.connect()

// Set template engine
app.engine('hbs', engine({extname:'.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resources/views'))

// Set static file
app.use(express.static(path.join(__dirname,'public')))

// Route app
route(app)

app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(port, ()=>{
    console.log(`App start at http://localhost:${port}`)
})