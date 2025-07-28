const product = require('../models/product')


// manual approach
const getAllProductsStatic = async  (req, res) => {
    const search = 'ab'
    const products = await product.find({
        name: { $regex: search, $options: 'i'}
    })
    res.status(200).json({products, nbHits: products.length})
    // throw new Error('testing async Errors')
    // res.status(200).json({msg:'products testing route'})
}


// real functionality
const getAllProducts = async  (req, res) => {
    const {featured, company, name } = req.query
    const queryObject = {}
   
    if (featured) {
        queryObject.featured = featured === 'true'? true : false
    }

    if(company) {
        queryObject.company = company   
    }

    if(name) {
        queryObject.name =  { $regex: name, $options: 'i'}
    }
    console.log(queryObject);
    
     const products = await product.find(queryObject);
    res.status(200).json({ products, nbHits: products.length })
}
module.exports = {
    getAllProductsStatic, 
    getAllProducts,

}