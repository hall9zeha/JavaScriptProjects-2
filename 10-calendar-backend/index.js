const express = require('express');
require ('dotenv').config();


console.log("Hola world")

//Create express server
const app = express();


//Public directory
app.use(express.static('public')) //El use es un middleware que se ejecuta cuando alguien hace una petición al servidor


//Routes

//api/auth -> es la ruta que (puede ser cualquiera que se nos ocurra)  contendrá todo 
//lo que se exporte desde ./routes/auth que sí es una ruta real en nuestra estructura de backend
app.use('/api/auth', require('./routes/auth'));

//Listen requests
app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})