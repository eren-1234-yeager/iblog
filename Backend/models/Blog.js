const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Users',
        require:true
    },
    description: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        default: "general"
    },
    timestamp: { type: Date, default: Date.now },

});

const Blogs = mongoose.model("Blogs", blogSchema);
module.exports = Blogs;