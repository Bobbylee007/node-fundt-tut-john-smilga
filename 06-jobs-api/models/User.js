const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        requiered: [true, 'Please provide name'],
        minlength:3,
        maxlenght:50,
    },
    email:{
        type: String,
        requiered: [true, 'Please provide eamil'],
        match: [
        /^\S+@\S+\.\S+$/, 'Please provide a valid email',
        ],
      unique: true,
    },
       password: {
        type: String,
        requiered: [true, 'Please provide password'],
        minlength: 6,
    
    },
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})


UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId:this._id, name: this.name },'jwtSecret',{ expiresIn:'30d', })
    
}

module.exports = mongoose.model('User', UserSchema)         