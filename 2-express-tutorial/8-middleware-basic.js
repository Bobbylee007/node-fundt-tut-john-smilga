const express = require('express')
const app = express()
 
// req => middleware => res

const logger = (req,res,next)=>{
  const method = req.method;
  const url = req.url;
  const time = new  Date().getFullYear()
  console.log(method, url, time)
  next() //next method it use to pass the middleware function
          // to app.get method

  // res.send('Testing');   this code comes in place
  //  when u dont wont to pass the NEXT middleware to app.get method,
  //  which that terminates app.get() logic
}

app.get('/', logger, (req, res)=>{  //logger is pass here with the next middleware above
  res.send('Home')
})

app.get('/about', logger, (req, res)=>{
 res.send('About')
})


app.listen(5000, ()=>{
  console.log('server is listening on PORT 5000...')
})