const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        requireed: [true,'must provide name'],
        trim: true,
        maxlength: [20, 'name can not more than 20 characters'],
    },
    complete:{
        type: Boolean,
        default: false,
    }, 
})
module.exports = mongoose.model('Task', TaskSchema)
