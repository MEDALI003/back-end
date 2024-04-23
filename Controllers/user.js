const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const user = require("../Models/user");
require("dotenv").config()
exports.signup=async(req,res)=>{
    try {
        const{name,lastname,email,password,image,phone,Birth}=req.body
        const foundUser=await user.findOne({email})
        if (foundUser) {
            res.status(400).send({msg:"email already in use!"})
        }
        else{
            const newUser=new user(req.body)
            const hashed=await bcrypt.hash(password,10)
            newUser.password=hashed
            await newUser.save()
            const token=await jwt.sign({
                _id: newUser._id
              }, process.env.SECRET_KEY);
        res.status(200).send({msg:"user added successfully",newUser,token})
        }
    } catch (error) {
        res.status(500).send({msg:"there is a problem",error})
        
    }
}
exports.login=async(req,res)=>{
    try {
        const{email,password}=req.body
        const foundUser=await user.findOne({email})
        if (!foundUser) {
            res.status(400).send({msg:"this user doesn't even exists"})
        }
        else{
            const test = await bcrypt.compare(password, foundUser.password);
            if(test){
                const token=await jwt.sign({
                    _id: foundUser._id
                  }, process.env.SECRET_KEY);
                  res.status(200).send({msg:"logged in successfully",foundUser,token})
            }
            else{
                res.status(400).send({msg:"correct you're email or password"})
            }
        }
    } catch (error) {
        res.status(500).send({msg:"error on logging in",error})
        console.log(error)
    }
}
exports.editPassword=async(req,res)=>{
    try {
        const {password}=req.body
        const{_id}=req.params
        await user.updateOne({_id},{$set:{password:password}})
        res.status(200).send({msg:"password updated successfully"})
    } catch (error) {
        res.status(500).send({msg:"cannot update the password"})
    }
}
exports.deleteuser=async(req,res)=>{
    try {
        const{_id}=req.params
        await user.deleteOne({_id})
        res.status(200).send({msg:"user deleted successfully "})
    } catch (error) {
        res.status(500).send({msg:"cannot delete the user"})
    }
}
exports.editphoto=async(req,res)=>{
    try {
        const {image}=req.body
        const{_id}=req.params
        await user.updateOne({_id},{$set:{image:image}})
        res.status(200).send({msg:"image updated successfully"})
    } catch (error) {
        res.status(500).send({msg:"cannot update the image"})
    }
}
exports.getuser=async(req,res)=>{
    try {
        const{_id}=req.body
        const foundUser=await user.findOne({_id})
        foundUser?res.status(200).send({username:foundUser.lastName+" "+foundUser.name}):null
    } catch (error) {
        res.status(500).send({msg:"cannot find the user"})
    }

}