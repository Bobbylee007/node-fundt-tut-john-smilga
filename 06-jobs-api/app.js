require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// connectDB
const connectDB = require('./db/connect')

//routers
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')

//error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())
// extra packages


//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//Serve
const port = process.env.Port || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()