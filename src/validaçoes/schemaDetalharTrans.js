const joi = require('joi');

const schemaDetalharTransacao = joi.object({
    id: joi.number().messages({
        'number.base': "O parâmetro de busca deve ser um número."
      })
});

module.exports = schemaDetalharTransacao