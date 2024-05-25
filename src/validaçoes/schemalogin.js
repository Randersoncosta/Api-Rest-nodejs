const joi = require('joi')

const schemaLogin = joi.object({
    email : joi.string().email().required().messages({
        'string.email': 'email ou senha incorretos',
        'any.required' : 'Campo email é obrigatorio.',
        'string.empty': 'Campo email é Obrigatorio' 
    }),
    senha : joi.string().required().messages({
        'string.senha': 'email ou senha incorretos',
        'any.required' : 'Campo email é obrigatorio.',
        'string.empty': 'Campo email é Obrigatorio' 
    })

});

module.exports = schemaLogin