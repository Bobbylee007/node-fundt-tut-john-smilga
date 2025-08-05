// check username, password in post (login) request in req.body
// if exit create new jwt
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body

    // mongoose validation
    //joi using pakage of joi to validate
    //check in the controller

    if(!usernamen || !password){
        throw new CustomAPIError('please provide username and password', 400)
    }
    
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({ msg:`Hello, John Doe`, secret:`Here is your authorized data, your luck number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}