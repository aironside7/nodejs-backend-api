const express = require("express")
const coustomarModel= require("../model/coustomar")
const router = express.Router()

router.post("/customar", async (req,res)=>{
    try{
        const newCustomar= new coustomarModel(req.body)
        const createCustomar = await newCustomar.save()
        res.status(200).json({
            status:"success",
            createCustomar
        })
    }catch(e){
          res.status(400).json({
            status:"failed",
            meggage:"fill all data properly"
        })
    }
} )

module.exports=router