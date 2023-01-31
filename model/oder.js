const mongoose= require("mongoose")
const orderSchema= new mongoose.Schema({

    customar_id:{
        type:String,
        required:true,
    }, 
    inventory_id:{
        type:String,
        required:true,
    },
    
    item_name:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    }
    
})
const order= mongoose.model("order",orderSchema)
module.exports=order