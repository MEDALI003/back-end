const {cloudinary } = require("cloudinary").v2;
const express=require("express")
const multer=require("multer");

const upload=multer()
require("dotenv").config();
const uploadRouter=express.Router()

uploadRouter.post('/photo',
upload.single('file'),async (req,res)=>{
    cloudinary.config({
        cloud_name: 'dvdx4mvqx',
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
      });
      const streamUpload=(req)=>{
        return new Promise(async(resolve,reject)=>{
            const stream=  await cloudinary.uploader.uploadStream((error,result)=>{
                if(result){
                    resolve(result)
                }else{
                    reject(error)
                }
            });

        })
      }
      const result=await streamUpload(req)
      console.log(result,"result")
      res.send(result)
}
)
module.exports=uploadRouter