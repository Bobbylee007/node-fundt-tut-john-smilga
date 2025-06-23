const express = require("express");
const app = express();

const people = require('./routes/people')
const auth  = require('./routes/auth')


// when having more router and more function is using express
// also using MVC pattern

// static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({entended: false}))
// parse json here
app.use(express.json())

//setting up base route
app.use('/api/people', people)
app.use('/login', auth)




app.listen(5000, () => {
  console.log("server is listening on PORT 5000...");
});
