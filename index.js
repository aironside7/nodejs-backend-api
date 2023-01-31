const express = require("express")
require("./conn")
const customarRoute= require("./routes/customarRou")
const invRoute= require("./routes/invenRou")
const orderRoute= require("./routes/oderRou")

const app= express()
app.use(express.json())
const port= 3005
app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/", customarRoute)
app.use("/", invRoute)
app.use("/", orderRoute)


app.listen(port,()=>{
    console.log(`connection succesfull port ${port}` )
})