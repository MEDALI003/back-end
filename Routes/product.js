const express=require("express")
const { addProduct, getproduct, editprice, deleteProduct } = require("../Controllers/product")
const router=express.Router()



router.post("/addproduct",addProduct)
router.get("/products",getproduct)
router.put("/updateproduct/:_id",editprice)
router.delete("/deleteproduct/:_id",deleteProduct)

module.exports=router