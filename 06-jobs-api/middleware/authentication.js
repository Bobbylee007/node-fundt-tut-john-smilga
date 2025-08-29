const User = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // attach the user to the job routes
    // const user = User.findById(payload.id).select('-password')  //for other dev, looking for user in FN if u want to use this logic remove line 20
    // req.user = user

    req.user = { userId: payload.userId, name: payload.name }  // for testing purposes
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = auth