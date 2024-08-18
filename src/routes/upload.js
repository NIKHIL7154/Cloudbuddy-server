const express= require('express');
const { uploadFile } = require('../service/uploadFeat');
const { UniqueID } = require('../utils/helpers');
const { addWebsiteToDatabase } = require('../service/databaseService');
const { verifytoken } = require('../middle/authverify');

const route= express.Router()
const HostLink="https://d5y80a0gya9r7.cloudfront.net/"

route.post("/multiupload",async (req,res)=>{
    const files=req.body.data
    let uid=UniqueID(4)
    let response=[]
    for(let file of files){
        response.push(await uploadFile(file.dir,file.type,uid))
        
    }
    
    res.json({Urls:response,endpoint:("https://d5y80a0gya9r7.cloudfront.net/"+uid),id:uid})
    
})

//verfytoken to add
route.post("/addwebsite",verifytoken, async (req,res)=>{
    const data= req.body.data
    
    const payload={...data,...req.authdata,endpoint:HostLink+data.webid}
    
    if(await addWebsiteToDatabase(payload)){
        res.json({status:"success",message:"Website added successfully",endpoint:HostLink+data.webid})
        return
    }
    res.status(401).json({status:"error",message:"Website not added"})
})

module.exports =route;