const mongoose = require('mongoose');


const registerSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
        minlength : [2, 'Enter at least 2 character']
    },
    email:{
        type: String,
        required : true,
    },
    password:{
        type : String,
        required : true,
        minlength : [4, 'Password must be contain at least 4 charactecr']
    }
})

module.exports = mongoose.model('user', registerSchema);