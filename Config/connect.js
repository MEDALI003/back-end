const mongoose=require("mongoose")

exports.connectDB=async()=>{
    try {
        require("dotenv").config()
        await mongoose.connect(process.env.DBlink)
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}