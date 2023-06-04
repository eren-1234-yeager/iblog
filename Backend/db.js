const mongoose=require('mongoose')

const mongo_URI="mongodb://localhost:27017/iblog";

const connectToMongo=()=>{
    mongoose.connect(mongo_URI)
}

module.exports=connectToMongo;