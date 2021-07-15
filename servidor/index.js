const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express()

//CONECTAR A LA BASE DE DATOS
conectarDB();

//PUERTO DE LA APP
const PORT = process.env.PORT || 4000;


//ARRANCAR LA APP
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})
