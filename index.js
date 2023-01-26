const express=require("express")
const app=express()
const path=require("path")

app.use(require("cors")())
app.use("/",express.static(path.join(__dirname,"public")))
app.use("/voiture/:id",express.static(path.join(__dirname,"public")))
app.use("/contact",express.static(path.join(__dirname,"public")))
app.use("/*",express.static(path.join(__dirname,"public")))



const PORT=process.env.PORT||80

app.listen(PORT,_=>console.log("server connected !"))