const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
   
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema)