//modules
const express = require('express')
const app = express()

const feedRoutes = require('./routes/feedRoutes')

//Rotas app
app.use("/feed", feedRoutes )


const porta = 8000
app.listen(porta, ()=>{
    console.log("Server ta on porta: " + porta )
})