const mongoose = require('mongoose')
const { Schema } = mongoose;

const commentSchema=new Schema({
    content:{
        type:String,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    blog:{
        type:Schema.Types.ObjectId,
        ref:"Blogs",
        required:true
    }
})

const Comments= mongoose.model("Comments", commentSchema);
module.exports = Comments;