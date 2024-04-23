const express=require("express")
const { connectDB } = require("./Config/connect");
//creation of app
const app=express()

//middleware

app.use(express.json())
const cors=require("cors"); 

const corsOptions ={ origin:'*', credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200, } 
 app.use(cors(corsOptions))

 require("dotenv").config()


 //apis&& server
 connectDB()
 
//cloudinary


app.use("/api/basket",require("./Routes/basket"))
app.use("/api/user",require("./Routes/user"))
app.use("/api/cloud",require("./uploadPhoto"))
app.use("/api/product",require("./Routes/product"))
 app.listen(process.env.port,(error)=>{
    error?console.log("Server is down"):console.log("server is up")
 })