const mongoose = require("mongoose")

const connect =  mongoose.connect(process.env.DB).then(()=>{
    console.log("connected to database");
}).catch(()=>{
 console.log("connection fail");
})

module.exports = connect