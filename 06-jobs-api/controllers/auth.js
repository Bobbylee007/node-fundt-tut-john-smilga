const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')


const register = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        res.status(StatusCodes.CREATED).json({ user })
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message  })
        
    }
}

const login = async (req, res) => { 
    res.send('login user')
}

module.exports = {
    register,
    login,
}