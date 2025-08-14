//imports
require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { dashboard, login } = require('./controllers/main')


// middleware  routes-middleware & Error-middleware

//static file 
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1', mainRouter)

//Errors
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)




// server 
const port = process.env.PORT || 3000

const start = async () =>{
    try {
        app.listen(port, console.log(`server is listening on ${port}....`))
    } catch (error) {
        console.log(error);
    }
}
start();