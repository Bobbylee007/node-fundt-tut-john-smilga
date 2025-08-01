const product = require("../models/product");

// manual approach
const getAllProductsStatic = async (req, res) => {
  const products = await product.find({price: { $gt:30 } })
  .sort('name')
  .select('name price')
  // .limit(10)
  // .skip(5)
  res.status(200).json({ products, nbHits: products.length });
  // throw new Error('testing async Errors')
  // res.status(200).json({msg:'products testing route'})
};

// real functionality (Automated approach)
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
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

// Numeric Filters
if (numericFilters) {
  const operatorMap = {
    '>':'$gt',
    '>=':'$gte',
    '=':'$wq',
    '>':'$gt',
    '<=':'$lte',
  }
  const regEx = /\b(<|>|>=|=|<|<=)\b/g
  let filters = numericFilters.replace(regEx,
    (match)=>`-${operatorMap[match]}-`
  )
  const options = ['price', 'rating'];
  filters = filters.split(',').forEach((item) => {
    const [field,operator,value] = item.split('-')
    if(options.includes(field)){
      queryObject[field]= {[operator]: Number(value)}
    }
  });
  
}

  console.log(queryObject);

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
  const limit = Number(req.query.limit) || 10
  const skip = (page -1) * limit 
  
  result = result.skip(skip).limit(limit)
// items 23
// 4 7 7 7 2     limit page by 7  means  23/7 = 4pages last page will have only 2 items
  const products = await result
  res.status(200).json({ products, nbHits: products.length });


}
module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
