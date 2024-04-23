const mongoose=require("mongoose")


//creation of the schema


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },

    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('product',productSchema)