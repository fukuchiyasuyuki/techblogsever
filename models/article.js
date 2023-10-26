const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    updated:{
        type:Date,
        default:Date,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    image:{
        type:Object,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("article", dataSchema);