const express = require('express')
const app = express()
const morgan = require('morgan')
 const logger = require('./logger')
 const authorize = require('./authorize')


//  req => middleware => res

//1. use vs route
//2. options - our own /express /third party

// app.use([logger, authorize]) our own   // execute multiple middleware function is placing inside array
// app.use(express.static('./public')) express middle
// for third party middleware we  have to install it.(EX: morgan)

// app.use(logger)  // if app.use middleware any of this app.get, 
                // it wont work and it will work for once below it
                // by adding path app.use('/api'/, logger) it will only work for those paths
                // EX. api/home/about/product this will go for any path after /api routes

app.use(morgan('tiny'))    
app.get('/', (req, res)=>{  
  res.send('Home')
})
app.get('/about', (req, res)=>{
 res.send('About')
})
app.get('/api/products',[logger, authorize], (req, res)=>{ //remember to remove [logger, authorize]
 res.send('product')
})
app.get('/api/items', (req, res)=>{
  console.log(req.user)
 res.send('items')
})

app.listen(5000, ()=>{
  console.log('server is listening on PORT 5000...')
})