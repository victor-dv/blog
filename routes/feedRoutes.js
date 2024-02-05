const express = require('express')
const router = express.Router()
const { check, body } = require('express-validator')

const feedController = require("../controllers/feedController")
const { validateEmail, validateTitle } = require('../services/validator')

//Rotas relacionadas ao feed
router.get("/posts", feedController.getPosts)

router.post('/posts',
    [
       validateEmail,
       validateTitle
       
    ]

    , feedController.createPost);

router.delete("/posts/:postId", feedController.deletePost)
router.patch("/posts/:postId", feedController.updatePost)


module.exports = router