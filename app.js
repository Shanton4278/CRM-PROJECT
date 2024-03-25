const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// // ==================== CONTROLLERS ==================
const userController = require('./controllers/usercontroller');


// // ==================== MIDDLEWARE ===================
app.use(express.json())
app.use( '/',userController) 


app.listen(port, ()=>{console.log()})