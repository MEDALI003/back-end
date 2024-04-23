const express=require("express")
const { registerValidation, Validator } = require("../middleware/validator")
const { signup, login, editPassword, editphoto, deleteuser, getuser } = require("../Controllers/user")
const { isAuth } = require("../middleware/isAuth")

//router 
const router=express.Router()

const current=async(req,res)=>{
    try {
        const foundUser=req.user
        res.status(200).send({foundUser})
    } catch (error) {
        res.status(500).send({error})
    }
}

//creating of router

router.post("/signup",registerValidation(),Validator,signup)

router.post("/login",login)

router.put("/editpassword/:_id",editPassword)

router.put("/editphoto/:_id",editphoto)

router.delete("/deleteuser/:_id",deleteuser)

router.get("/current",isAuth,current)

router.get("/getuser",getuser)

module.exports=router
