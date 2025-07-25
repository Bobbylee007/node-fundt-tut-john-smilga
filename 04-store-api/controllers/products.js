const product = require('../models/product')
const Product = require('../models/product')


// manual approach
const getAllProductsStatic = async  (req, res) => {
    const products = await Product.find({
        featured: true,
    })
    res.status(200).json({products})
    // throw new Error('testing async Errors')
    // res.status(200).json({msg:'products testing route'})
}


// real functionality
const getAllProducts = async  (req, res) => {
    res.status(200).json({msg:'products  route'})
}

module.exports = {
    getAllProductsStatic, 
    getAllProducts,

}