const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/cloudbuddy",{
    serverSelectionTimeoutMS:4000
}).then().catch((err)=>{
    console.log(err)
})
mongoose.connection.on("connected",()=>{
    console.log("Connected successfully to database.")
})

mongoose.connection.on("error",(err)=>{
    console.log(err)
})

module.exports=mongoose