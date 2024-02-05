const { check, body } = require("express-validator")

module.exports = {
    validateEmail:
        check("email").
            isEmail().
            withMessage("Digite um email válido").
            custom((value, { req }) => {
                if (value == "jose@gmail.com") {
                    throw new Error("Email ja existe")
                }
                return true;
            }),
    validateTitle:
        body("title")
            .isLength({ min: 5 })
            .withMessage("O titulo precisa de pelo menos 5 caracteres")

}
