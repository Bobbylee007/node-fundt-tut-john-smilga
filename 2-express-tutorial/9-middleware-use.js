const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//  req => middleware => res
// app.use(logger)

app.use([logger, authorize])   //execute multiple middleware function is placing inside array
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