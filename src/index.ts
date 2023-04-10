import express from "express"; //ECMASCRIPT MODULES
import usuarioRoutes from "./routes/usuarioRoutes";
// const express = require("express"); //CommonJS

// Cada linea de codigo es un middleware -> se ejecutan una tras otra
// Crear la app
const app = express();

//Habilitar pug
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
// Routing
// use -> Escanea todas las rutas que inicien con / en usuarioRoutes
app.use("/auth", usuarioRoutes);

// Definir un puerto
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor montado en el puerto ${PORT}`);
});
