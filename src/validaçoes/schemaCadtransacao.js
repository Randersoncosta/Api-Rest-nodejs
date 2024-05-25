const joi = require('joi');

const schemaCadCategoria = joi.object({
    tipo : joi.string().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'string.empty' : 'O Compo nome é Obrigatorio.' 
    }),
    descricao : joi.string().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'string.empty' : 'O Compo nome é Obrigatorio.'
    }), 
    valor : joi.number().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'number.empty' : 'O Compo nome é Obrigatorio.'
    }),
    data : joi.string().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'number.empty' : 'O Compo nome é Obrigatorio.'
    }),
    categoria_id : joi.number().required().messages({
        'any.required' : 'O Campo nome é Obrigatorio.',
        'number.empty' : 'O Compo nome é Obrigatorio.'
    })
})

module.exports = schemaCadCategoria