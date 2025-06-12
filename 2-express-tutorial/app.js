const express = require("express");
const app = express();
let {people} = require('./data')
 
// static assets
app.use(express.static('./methods-public'))

//read data
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

//add or insert data
//two flavors



app.listen(5000, () => {
  console.log("server is listening on PORT 5000...");
});
