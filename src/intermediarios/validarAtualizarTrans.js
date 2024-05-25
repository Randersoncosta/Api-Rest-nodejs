const knex = require("../conexao");
const jwt = require('jsonwebtoken');
const senhajwt = require('../senha') 

const validarAtualizarTransacao = async (req, res, next) => {
    const { Id } = req.params;
    const { descricao, valor, data, categoria_id, tipo } = req.body;
    const token = req.token;
    const {id} = jwt.decode(token, senhajwt)

    try {

        const listaDeTransacoes = await knex('transacoes').where({'id': Id,'usuario_id': id});


        if (listaDeTransacoes.length === 0) {
            return res.status(404).json({ mensagem: "Nenhuma Transação encontrada" });
        }

        const validarCategoria = await knex('categorias').where('id',categoria_id);

        if (validarCategoria.length === 0) {
            return res.status(404).json({ mensagem: "Categoria não encontrada" });
        }

        if (tipo != "entrada" && tipo != "saida") {
            return res.status(404).json({ mensagem: " Erro ao cadastrar, tipo de transação inválida" });
          }

        await knex('transacoes').where({'id': Id, 'usuario_id' : id}).update({
                descricao: descricao,
                valor: valor,
                data: data,
                categoria_id: categoria_id,
                tipo: tipo
            });

        next()

    } catch (error) {
        return res.status(400).json({ messagem: error.message })
    }

}

module.exports = validarAtualizarTransacao