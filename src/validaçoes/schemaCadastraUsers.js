const joi = require('joi')

const schemaCriaUsuario = joi.object({
    nome : joi.string().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'string.empty' : 'O Compo nome é Obrigatorio.'
    }),
    email : joi.string().required().messages({
        'string.email' : 'email informando invalido.',
        'any.required' : 'O Campo email é Obrigatorio.',
        'string.empty': 'O Campo email é Obrigatorio.'
    }),
    senha : joi.string().min(4).required().messages({
        'any.required' : 'O Campo Senha é Obrigatorio.',
        'string.empty' : 'O Campo Senha é Obrigatorio.',
        'string.min' : 'A Senha precisa ter pelo menos 4 caracteres'
    })
})

module.exports = schemaCriaUsuario