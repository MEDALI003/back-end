const mongoose=require("mongoose")

//schema creation

const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        requiredd:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Birth:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
    },
    phone:{
        type:String,
        required:true
    },
    prefileges:{
        type:String,
        default:"user"
    }



})
module.exports=mongoose.model('user',userSchema)