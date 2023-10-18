const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const connect = require("./connect/db")
const port = process.env.port || 4000





app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`listening on server ${port}`);
})
