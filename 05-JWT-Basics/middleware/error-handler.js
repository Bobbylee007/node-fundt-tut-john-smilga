const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err)
 return res.status(500).json({msg: 'something went wrong, pleasse try again' })
}

module.exports = errorHandlerMiddleware