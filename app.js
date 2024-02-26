const path = require("path")
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

const port = 8080;
const feedRoutes = require("./routes/feedRoutes")
const authRoutes = require("./routes/authRoutes");
const { db } = require("./models/user");

const uploadFiles = require('./services/uploadfiles');
const { error } = require("console");
//upload de imagens




//Json parser do express - middleware para 'captar' os json do client!
app.use(express.json());

app.use(multer({ storage: uploadFiles.fileStorage, fileFilter: uploadFiles.fileFilter }).single('image'))

app.use("images", express.static(path.join(__dirname, 'images')))

//middleware multer

//middleware para configurar o CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Rotas do app - Esse middleware vai captar todas as rotas criadas no feedRoutes
app.use('/feed', feedRoutes)
app.use('/auth', authRoutes)

app.use((error, req, res, next)=>{
    console.log(error)

    res.status(401).json({error: error})
})

mongoose.connect("mongodb://127.0.0.1:27017/blog")
    .then(result => {
        app.listen(port, () => {
            console.log("Server online na porta: " + port)
        })
    })
    .catch(error => {
        console.log(error)
    })