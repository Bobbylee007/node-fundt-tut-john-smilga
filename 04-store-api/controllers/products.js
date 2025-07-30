const product = require("../models/product");

// manual approach
const getAllProductsStatic = async (req, res) => {
  const products = await product.find({})
  .sort('name')
  .select('name price')
  .limit(10)
  .skip(5)
  res.status(200).json({ products, nbHits: products.length });
  // throw new Error('testing async Errors')
  // res.status(200).json({msg:'products testing route'})
};

// real functionality
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  // console.log(queryObject);

  let result =  product.find(queryObject)
  // sort
  if (sort) {
  const sortList = sort.split(',').join(' ');
  result = result.sort(sortList)
  }
  else{
    result = result.sort('creatAt')
  }

  // select or fields
  if(fields){
   const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList)
  }

  // pagination 
  const page = Number(req.query.page) || 1
  



  const products = await result
  res.status(200).json({ products, nbHits: products.length });


}
module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
