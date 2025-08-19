const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        requiered:[true, 'Please provide name'],
        minlength:3,
        maxlenght:50,
    },
    email:{
        type:String,
        requiered:[true, 'Please provide eamil'],
        match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email'
      ],
      unique: true,
    },
       password:{
        type:String,
        requiered:[true, 'Please provide password'],
        minlength:6,
        maxlenght:12,
    },
})

module.exports = mongoose.model('User', UserSchema)         