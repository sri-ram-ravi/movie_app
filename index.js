const express=require("express")
const app=express()
const request=require("request")

app.listen(9900,()=>console.log("server is listening"))

app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/search_movie",(req,res)=> res.render("search"))

app.get("/result",(req,res)=>{

    let query=req.query.search

    // requesting to external api

    const searchRequest=`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=0c300ff53789a02da04686e856581e41`

    request(searchRequest,(err,body)=>{
        if(err) console.log(err)
        let data=JSON.parse(body)
        res.render("result",{data:data,query:query})        
    })

})
