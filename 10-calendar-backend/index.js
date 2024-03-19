const express = require('express');
console.log("Hola world")

//Create express server
const app = express();

//Routes
app.get('/',(req,res)=>{
    res.json({
        ok:true
    })
})


//Listen requests
app.listen(4001,()=>{
    console.log("Server is running")
})