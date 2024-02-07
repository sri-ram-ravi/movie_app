const express=require("express")
const app=express()
app.listen(5000,()=>console.log("server is listening"))

app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/search_movie",(req,res)=> res.render("search"))

app.get("/result",(req,res)=> res.render("result"))