const mongoose = require('mongoose');

var user = mongoose.model('Users' , {
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        minlength: 1,
        trim: true
    }
});

module.exports = {user};