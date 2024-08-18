const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://playstud:nikhilthakur@cloudbuddy-data.rdj6n.mongodb.net/?retryWrites=true&w=majority&appName=CloudBuddy-data",{
    
    
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