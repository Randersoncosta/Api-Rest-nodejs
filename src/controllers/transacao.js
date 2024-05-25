const knex = require("../conexao");
const jwt = require('jsonwebtoken');
const senhajwt = require("../senha");


const cadastrarTransacao = async (req, res) => {
    const token = req.token;
    const { tipo, descricao, valor, data, categoria_id } = req.body;
    const { id } = jwt.decode(token, senhajwt);

    try {
        const novaTransacao = await knex('transacoes').insert({
            tipo,
            descricao,
            valor,
            data,
            categoria_id,
            usuario_id: id
        }).returning('*');

        console.log(novaTransacao)

        return res.status(201).json(novaTransacao);

    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }

};

const listarTransacoes = async (req, res) => {
    const ListaTransacao = req.body;
    try {      

        return res.status(200).json(ListaTransacao);

    } catch (error) {
        return res.status(404).json({ messagem : error.message })
    }
};

const detalharTransacao = async (req, res) => {
    const detalharTransacao = req.body;
    try {

        return res.status(200).json(detalharTransacao);

    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }
};

const atualizarTransacao = async (req, res) => {
    const { Id } = req.params;

    try {
        const listaDeTransacoes = await knex('transacoes').where('id', Id);
        return res.status(201).json(listaDeTransacoes);

    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }
};

const deletarTransacao = async (req, res) => {
    try { 

      return res.status(202).json({ messagem : "Transação deletada com Sucesso."});

    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }
  };

module.exports = {
    cadastrarTransacao,
    listarTransacoes,
    detalharTransacao,
    atualizarTransacao,
    deletarTransacao
}