const jwt=require('jsonwebtoken')
require('dotenv').config()
const jwt_key=process.env.JWT_KEY

const fetchUser=(req,res,next)=>{
    try{
        const authToken=req.header('authToken')
        
        const data=jwt.verify(authToken,jwt_key)
        req.user=data.user
        next()

    }catch(err){
        next()
    }
    
}

module.exports=fetchUser