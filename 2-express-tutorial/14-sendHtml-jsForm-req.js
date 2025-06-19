const express = require("express");
const app = express();
let { people } = require('./data')
 
// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({entended: false}))

// parse json here
app.use(express.json())

//read data
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})


//add or insert data
//two flavors
// 1* using HTML forms and  parse the form with express middleware urlencoded to get form data
// 2* using javascript to send request

//2*
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true, person: name})
})


//1*
app.post('/login', (req, res) => {
  // console.log(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('please provide credentials')
  res.send('POST')
})

//Note: for everytime we need to test data we need to develop a frontend
//      which will work much much time cusoming
//      beter option is to use postman for testing data

app.listen(5000, () => {
  console.log("server is listening on PORT 5000...");
});
