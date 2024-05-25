const joi = require('joi')

const schemaEditarUsuario = joi.object({
    nome : joi.string().required().messages({
        'string.nome': ' O Nome está incorreto.',
        'any.required':'Campo Nome é Obrigatorio.',
        'string.empyt': 'Campo Nome é Obrigatorio'
    }),
    email : joi.string().email().required().messages({
        'string.email': 'email ou senha esta incorreto',
        'any.required': 'Campo email é Obrigatorio.',
        'string.empyt': 'Compa email é Obrigatorio.'
    }),
    senha : joi.string().min(4).required().messages({
        'string.empyt': 'Campo Senha é Obrigatorio.',
        'any.required': 'O Campo Senha é Obrigatorio.',
        'string.min' : 'A Senha precisa ter pelo menos 4 caracteres'
    })
})

module.exports = schemaEditarUsuario