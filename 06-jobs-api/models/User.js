const mongoose = require('mongoose')


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
        /^\S+@\S+\.\S+$/, 'Please provide a valid email'
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
    this.password = await bcrypt.hash(this.password, salt)
})
module.exports = mongoose.model('User', UserSchema)         