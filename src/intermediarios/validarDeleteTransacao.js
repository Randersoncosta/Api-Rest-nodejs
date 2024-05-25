const knex = require("../conexao");
const senhajwt = require('../senha');
const jwt = require('jsonwebtoken')

const validarDeleteTransacao = async (req, res, next) => {
    const { Id } = req.params;
    const token = req.token
    const { id } = jwt.decode(token, senhajwt)
    try {

        const listaDeTransacoes = await knex('transacoes').where('usuario_id', id);

        const acharTransacao = listaDeTransacoes.find((transacao) => {
            return transacao.id === Number(Id);
        });

        if (!acharTransacao) {
            return res.status(404).json({ mensagem: "Transação não encontrada" });
        }
        
        await knex('transacoes').where('id', Id).del();

        next()

    } catch (error) {
        return res.status(400).json({ messagem: error.message })
    }

}

module.exports = validarDeleteTransacao