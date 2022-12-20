const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        trim: true
    },
    
    lName:{
        type: String,
        trim: true
    },
    
    email:{
        type: String,
        trim: true
    }
    
    });
    userSchema.plugin(passportLocalMongoose,{
        usernameField: 'email',
    });

module.exports = mongoose.model('Registration',userSchema)