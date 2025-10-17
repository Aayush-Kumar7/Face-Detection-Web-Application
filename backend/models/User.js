const mongoose = require('mongoose');

const UserSchrma = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    file:{
        type:String
    }

});

const UserModel = mongoose.model('faceuser',UserSchrma);
module.exports = UserModel;