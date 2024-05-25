const knex = require("../conexao");
const jwt = require('jsonwebtoken');
const senhajwt = require('../senha');


const validarDetalharTransacao = async (req, res, next) => {
    const { Id } = req.params;
    const token = req.token
    const { id } = jwt.decode(token, senhajwt)
    try {

        const detalharTransacao = await knex('transacoes').where({'id': Id ,'usuario_id': id});
       
        if (detalharTransacao.length === 0) {
            return res.status(404).json({ mensagem: "Transação não encontrada" });
        }  

        req.body = detalharTransacao

        next()

    } catch (error) {
        return res.status(400).json({ messagem: error.message })
    }
}

module.exports = validarDetalharTransacao