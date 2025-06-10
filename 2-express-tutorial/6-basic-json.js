const express = require('express')
const app = express()
const { products} = require('./data')


app.get('/', (req,res)=>{
  res.send('<h1> Home Page</h1><a href="api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    
    // newProduct is a subset of products array
  const newProduct = products.map((product)=>{
    const {id, name, image} = product;
    return {id, name, image};
  })

  res.json(newProduct);
  //res.json(products) serve all product data
}); 

app.listen(5000, ()=>{
  console.log('server is listening on PORT 5000...')
})