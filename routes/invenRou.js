const express = require("express")
const invModel= require("../model/inven")
const router = express.Router()

router.post("/inventory", async (req,res)=>{
    try{
        const inv= new invModel(req.body)
        const createInv = await inv.save()
        res.status(200).json({
            status:"success",
            createInv
        })
    }catch(e){
          res.status(200).json({
            status:"failed",
            meggage:"fill all data properly"
        })
    }
})

router.get("/inventory", async (req,res)=>{
    try{
        const getinventory = await invModel.find()
    res.status(200).json({
        getinventory
    })
    }catch(err){
       res.send(err)
    }
})

router.get("/inventory/electronics", async (req,res)=>{
    try{
        const getElecinventory = await invModel.find({inventory_type:"Electronics"})
    res.status(200).json({
        getElecinventory
    })
    }catch(err){
       res.send(err)
    }

    
})
router.get("/inventory/furniture", async (req,res)=>{
    try{
        const getFurninventory = await invModel.find({inventory_type:"Furniture"})
    res.status(200).json({
        getFurninventory
    })
    }catch(err){
       res.send(err)
    }

    
})
module.exports=router