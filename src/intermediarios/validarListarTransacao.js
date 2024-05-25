const knex = require('../conexao');
const senhajwt = require('../senha');
const jwt = require('jsonwebtoken');


const validarListaTransacao = async (req, res, next) => {
    const token = req.token
    const { id } = jwt.decode(token, senhajwt)

    try {
        const ListaTransacao = await knex('transacoes').where('usuario_id', id);
        
        if (ListaTransacao.length === 0) {
            return res.status(404).json({ mensagem: "Nenhuma Transação encontrada" });
        }

        req.body = ListaTransacao

        next()
    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }
}

module.exports = validarListaTransacao