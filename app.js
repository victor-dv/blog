//modules
const express = require('express')
const app = express()

const feedRoutes = require('./routes/feedRoutes')

//Json parser do express 
app.use(express.json())

//Rotas app
app.use("/feed", feedRoutes )

//Configurando o cors
app.use((req, res, next) =>{
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Acess-Control-Allow-Origin', 'Content-type, Authorization')
})

const porta = 8000
app.listen(porta, ()=>{
    console.log("Server ta on porta: " + porta )
})