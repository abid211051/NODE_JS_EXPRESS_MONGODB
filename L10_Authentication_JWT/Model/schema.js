const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username :{
        type : String,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        minlength : 4,
        required : true
    }
})

module.exports = mongoose.model('user', userSchema);