require('dotenv').config()
require('express-async-errors')

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require ('xss-clean')
const rateLimiter = require('express-rate-limit')





const express = require('express')
const app = express()

// connectDB
const connectDB = require('./db/connect')

// auth User-role
const authenticateuser = require('./middleware/authentication')

//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

//error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const auth = require('./middleware/authentication')

//middleware
app.set('trust proxy', 1 )
app.use(rateLimiter({
    window: 15 * 60 *1000, // 15 minutes
    max: 100, // limit each IP to requests per windowMs
})
);
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())


// extra packages


//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateuser, jobsRouter)

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