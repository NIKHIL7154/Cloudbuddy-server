const jwt= require('jsonwebtoken')
const { authKey } = require('../configs/validationkey')


async function verifytoken(req,res,next){
    
    if(!req.headers.authorization){
        console.log("No token")
        res.status(204).send("No token provided.")
        return
    }
    const [bearer,token]=req.headers.authorization.split(" ")
    if(bearer!="Bearer" || !token){
        res.status(204).send("No token found")
        return
    }
    jwt.verify(token,authKey,(err,data)=>{
        if(err){
            res.status(400).send({message:"Invalid token"})
            console.log(err)
            return
        }
        req.authdata=data
        next()
    })


    
}

module.exports={verifytoken}