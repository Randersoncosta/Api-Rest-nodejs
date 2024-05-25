const knex = require('../conexao')
const senhajwt = require('../senha')
const jwt = require('jsonwebtoken')

const validarCadastroUsers = async (req, res, next) => {
  const { email } = req.body;

  try {
    const novoUsuario = await knex('usuarios').where({ email }).first();

    if (novoUsuario) {
      return res.status(400).json({ messagem: "Esse e-mail já esta cadastrado." });
    }

    next();

  } catch (error) {
    return res.status(400).json({ messagem: error.message })
  }

}
const validarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      mensagem: 'Por favor realize o login para acessar esse recurso.'
    })
  }
  const token = authorization.split(' ')[1];

  try {
    const validarToken = jwt.verify(token, senhajwt)

    req.token = token;

    next();
  } catch (error) {
    return res.status(401).json({
      mensagem: 'Por favor realize o login novamente para obter um token de acesso válido.'
    })
  }
}
const validarEditarUsuario = async (req, res, next) => {
  const token = req.token;
  const { email } = req.body;
  const { id } = jwt.decode(token, senhajwt);

  try {
    const usuarioEncontrado = await knex("usuarios").where({ email }).first();

    if (usuarioEncontrado && usuarioEncontrado.id !== id) {
      return res.status(404).json({ mensagem: "Esse e-mail já está cadastrado." });
    }

    next();
  } catch (error) {
    return res.status(400).json({ messagem: error.message })
  }
};
module.exports = {
  validarCadastroUsers,
  validarEditarUsuario,
  validarUsuarioLogado
}