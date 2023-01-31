const express = require("express")
const invModel= require("../model/inven")
const oderModel= require("../model/oder")
const router = express.Router()

router.post("/order" , async(req,res)=>{
    try{
         const quantity= await invModel.findOne({inventory_id:req.body.inventory_id})
         if(quantity.available_quantity<req.body.quantity){
            return (
                res.status(400).json({
                    status:"failed",
                meggage:"out of stock"
                })
            )
            
         }else{
            const order= new oderModel(req.body)
        const createOrder = await order.save()
        const updateQuan= await invModel.findOne({inventory_id:req.body.inventory_id})
        const remaining= await updateQuan.available_quantity - req.body.quantity
        const update = await invModel.updateOne({inventory_id:req.body.inventory_id},{available_quantity:remaining})
        res.status(200).json({
            status:"success",
            createOrder
        })
         }
    }catch(e){
        res.status(400).json({
          status:"failed",
          meggage:"fill all data properly"
      })
  }
})
module.exports=router