const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express()

//CONECTAR A LA BASE DE DATOS
conectarDB();

//HABILITAR EXPRESS.JSON
app.use(express.json({extended: true}));

//PUERTO DE LA APP
const PORT = process.env.PORT || 4000;

//IMPORTAR RUTAS
app.use('/api/usuarios', require ('./routes/usuarios'));
app.use('/api/auth', require ('./routes/auth'));
app.use('/api/proyectos', require ('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'))

//ARRANCAR LA APP
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})
