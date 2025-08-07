require('dotenv').config()
// check username, password in post (login) request in req.body
// if exit create new jwt
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body

    // mongoose validation
    //joi using pakage of joi to validate
    //check in the controller

    if(!username || !password){
        throw new CustomAPIError('please provide username and password', 400)
    }

    //just for demo, normally provided by DB!!!
    const id = new Date().getDate()

    // try to keep payload small, better experience for user
    //just for demo, in production use long, complex and unguessable string value!!!
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;

if(!authHeader || !authHeader.startWith('Bearer ')){
    throw new CustomAPIError('No Token Present', 400)
}
    // console.log(req.headers);
    
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({ msg:`Hello, John Doe`, secret:`Here is your authorized data, your luck number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}