const express=require("express")
const { addbasket, getbasket } = require("../Controllers/basket")
const router=express.Router()





router.post("/addbasket",addbasket)
router.get("/getbasket",getbasket)


module.exports=router