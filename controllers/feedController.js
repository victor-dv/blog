const { validationResult } = require('express-validator')


exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                title: "Primeiro post",
                content: "Este é o primeiro post"
            }
        ]
    }
    )
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req)

    console.log(errors)

    if (!errors.isEmpty()) {
        return res.status(422).send({
            error: true,
            message: errors.array()[0].msg

        })
    }

    const title = req.body.title
    const content = req.body.content

    //Validação simples => verificar se foi enviado corretamente
    /*   if (!title || !content) {
          return res.status(400).json({
              error: true,
              msg: "Você precisa enviar corretamente"
          })
      } */

    // Futuramente vamos Add ao banco de dados
    /*  console.log(title)
    console.log(content) */

    res.status(201).json({
        error: false,
        msg: "Post criado com sucesso!!"
    })
}

exports.updatePost = (req, res, next) => {
    const postId = req.params.postId

    console.log(postId)

    res.status(200).json({
        msg: "Post atualizado com sucesso",
        post: postId
    })
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId

    console.log(postId)

    res.status(200).json({
        msg: "Post excluido com sucesso",
        post: postId
    })
}