const express= require("express")
const connectDB = require("./config/connectDb")
const userRoutes= require("./routes/index")
const cors= require("cors")
const app= express()
const PORT =5000 || process.env.PORT

connectDB()
app.use(cors())
app.use("/",userRoutes)
app.listen(PORT,(err)=>{
    if(err) throw err

    console.log(`listening on ${PORT}`)
})