const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    description: {
        type: String,
        required: true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    genre: {
        type: String,
        default: "general"
    },
    timestamp: { type: Date, default: Date.now },

});

const Blogs = mongoose.model("Blogs", blogSchema);
module.exports = Blogs;