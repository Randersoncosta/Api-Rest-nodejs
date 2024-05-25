const express = require('express');
const { cadastroUsuario, teste, editarUsuario } = require('./controllers/usuario');
const verificaCopoRequisicao = require('./intermediarios/verifyRequestBody');
const schemaCriaUsuario = require('./validaçoes/schemaCadastraUsers');
const { validarCadastroUsers, validarEditarUsuario, validarUsuarioLogado } = require('./intermediarios/validarUsers');
const schemaLogin = require('./validaçoes/schemalogin');
const validarLogin = require('./intermediarios/validarlogin');
const login = require('./controllers/login');
const schemaEditarUsuario = require('./validaçoes/schemaEditarUsuario');
const listaCategoria = require('./controllers/categorias');
const schemaCadCategoria = require('./validaçoes/schemaCadtransacao');
const validarCategoria = require('./intermediarios/validarTransacao');
const { cadastrarTransacao, listarTransacoes, detalharTransacao, atualizarTransacao, deletarTransacao } = require('./controllers/transacao');
const schemaDetalharTransacao = require('./validaçoes/schemaDetalharTrans');
const validarDetalharTransacao = require('./intermediarios/validarDetalharTrans');
const validarAtualizarTransacao = require('./intermediarios/validarAtualizarTrans');
const validarDeleteTransacao = require('./intermediarios/validarDeleteTransacao');
const validarListaTransacao = require('./intermediarios/validarListarTransacao');
const rotas = express()

rotas.post('/cadatraUsuario',verificaCopoRequisicao(schemaCriaUsuario), validarCadastroUsers,cadastroUsuario)
rotas.post('/login',verificaCopoRequisicao(schemaLogin),validarLogin,login);

rotas.use(validarUsuarioLogado);

rotas.put('/atualizar', verificaCopoRequisicao(schemaEditarUsuario),validarEditarUsuario,editarUsuario);
rotas.get('/listaCategoria',listaCategoria);
rotas.post('/transacao', verificaCopoRequisicao(schemaCadCategoria),validarCategoria,cadastrarTransacao);
rotas.get('/listartransacao', validarListaTransacao,listarTransacoes);
rotas.get('/detalhartransacao/:Id',verificaCopoRequisicao(schemaDetalharTransacao),validarDetalharTransacao,detalharTransacao );
rotas.put('/AtualizarTransacao/:Id', verificaCopoRequisicao(schemaCadCategoria), validarAtualizarTransacao, atualizarTransacao);
rotas.delete('/deletaTransacao/:Id',validarDeleteTransacao,deletarTransacao)

module.exports = rotas