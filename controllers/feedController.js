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
    const title = req.body.title
    const content = req.body.content

    //Validação simples => verificar se foi enviado corretamente
    if (!title || !content) {
        return res.status(400).json({
            error: true,
            msg: "Você precisa enviar corretamente"
        })
    }

    // Futuramente vamos Add ao banco de dados
    /*  console.log(title)
    console.log(content) */

    res.status(201).json({
        error: false,
        msg: "Post criado com sucesso!!"
    })
}