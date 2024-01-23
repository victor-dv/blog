const express = require ('express')
const router = express.Router()

const feedController = require("../controllers/feedController")

//Rotas relacionadas ao feed
router.get("/posts", feedController.getPosts )

module.exports = router