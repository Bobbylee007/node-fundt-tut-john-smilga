//imports
require('dotenv')
require('express-async-errors')

const express = require('express')
const app = app.express()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//routes


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