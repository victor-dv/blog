//modules
const express = require('express')
const app = express()

const feedRoutes = require('./routes/feedRoutes')

//Json parser do express 
app.use(express.json())

//Rotas app
app.use("/feed", feedRoutes )


const porta = 8000
app.listen(porta, ()=>{
    console.log("Server ta on porta: " + porta )
})