const { validationResult, Result } = require("express-validator");
const User = require('../models/user')

exports.signUpUser = (req, res, next) => {

    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()) {


        const error = new Error ("Falha na validação")
        error.statusCode = 422
        error.data = errors.array()

        throw errors;

       /*  return res.status(422).send({
            error: true,
            message: errors.array()[0].msg
        }); */
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    
    
    //Add este post ao DB
    const creator = new User({
        user: {name: name, email: email, password: password }
        

    })
    creator.save()
    .then(result =>{
        console.log(result)
        res.status(201).json({
            error: false,
            message: "User criado com sucesso!!",
            result: result
        })
    })


   
}
exports.signInUser = (req, res, next) => {

    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()) {
        return res.status(422).send({
            error: true,
            message: errors.array()[0].msg
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    
    //Add este post ao DB

    res.status(201).json({
        error: false,
        message: "Login com sucesso!!"
    })
}