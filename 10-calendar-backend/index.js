const express = require('express');
console.log("Hola world")

//Create express server
const app = express();


//Public directory
app.use(express.static('public')) //El use es un middleware que se ejecuta cuando alguien hace una petición al servidor


//Routes
// app.get('/',(req,res)=>{
//     res.json({
//         ok:true
//     })
// })


//Listen requests
app.listen(4001,()=>{
    console.log("Server is running")
})