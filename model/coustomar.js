const mongoose= require("mongoose")
const customerSchema = new mongoose.Schema({
    customar_id:{
        type:String,
        required:true,
        unique:true
    },
    customar_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true

    }
    
})
const customer = mongoose.model("customer",customerSchema)
module.exports=customer