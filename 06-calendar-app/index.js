const express = require('express');
require ('dotenv').config();
const cors = require("cors");
const { dbconnection } = require('./database/config');



console.log("Hola world")

//Create express server
const app = express();

// Cors

// app.use(express.urlencoded({ extended: true }));
app.use(cors("*")) 
//Public directory

//Database
dbconnection()

app.use(express.static('public')) //El use es un middleware que se ejecuta cuando alguien hace una petición al servidor

//Read and parse body
app.use(express.json());
 
//Routes
//Auth
//api/auth -> es la ruta que (puede ser cualquiera que se nos ocurra)  contendrá todo 
//lo que se exporte desde ./routes/auth que sí es una ruta real en nuestra estructura de backend
app.use('/api/auth', require('./routes/auth'));
//Events
app.use('/api/events', require('./routes/events'));
//Listen requests
app.listen(process.env.PORT,()=>{
    console.log(`Server is running in port: ${process.env.PORT}`)
})