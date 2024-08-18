require('dotenv').config()
const express= require("express");
const cors = require('cors')
const loginRoute =require('./routes/login');
const signupRoute =require('./routes/signup');
const uploadRoute = require('./routes/upload')
const websitesRoute = require('./routes/websites')
const googleAuth = require('./routes/googleAuth');
const { verifytoken } = require('./middle/authverify');



const app= express();
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());

app.use('/',loginRoute)

app.use("/",signupRoute)
app.use("/",uploadRoute)
app.get("/logs",(req,res)=>{
    console.log(req.body)
    res.send({message:"hello "+req.body.data});
})

app.post("/verifyAccessToken",verifytoken,(req,res)=>{
    res.send("Done")
})
app.use("/",websitesRoute)

app.use("/",googleAuth)




const PORT = process.env.PORT || 80;

app.listen(PORT,()=>{
    console.log("Server started at : "+PORT);
})