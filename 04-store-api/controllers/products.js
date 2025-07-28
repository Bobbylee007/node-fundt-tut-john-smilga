const product = require("../models/product");

// manual approach
const getAllProductsStatic = async (req, res) => {
  const products = await product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
  // throw new Error('testing async Errors')
  // res.status(200).json({msg:'products testing route'})
};

// real functionality
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
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
  console.log(queryObject);

  let result = await product.find(queryObject)
  if (sort) {
    proucts = products.sort()
  }
  
  res.status(200).json({ products, nbHits: products.length });
};
module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
