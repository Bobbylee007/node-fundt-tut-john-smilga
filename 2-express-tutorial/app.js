const express = require("express");
const app = express();
let {people} = require('./data')
 
// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({entended: false}))

//read data
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req, res) => {
  res.status(201).send('success')
})

//add or insert data
//two flavors
// 1* using HTML forms and  parse the form with express middleware urlencoded to get form data
// 2* using javascript to send request

app.post('/login', (req, res) => {
  // console.log(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('please provide credentials')
  res.send('POST')
})


app.listen(5000, () => {
  console.log("server is listening on PORT 5000...");
});
