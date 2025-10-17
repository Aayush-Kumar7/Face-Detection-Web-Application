const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    filename:{
        type:String,
    },
    originalname:{
        type:String
    },
    mimetype:{
        type: String
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);