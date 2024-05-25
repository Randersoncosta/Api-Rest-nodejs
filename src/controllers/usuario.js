const knex = require('../conexao');
const bcrypt = require('bcrypt');
const senhajwt = require('../senha')
const jwt = require('jsonwebtoken')


const cadastroUsuario = async (req , res) => {
      const { nome , email , senha} = req.body

    try {
        const senhaCriptografica = await bcrypt.hash(senha, 10);
       
        const novoUsuario = {nome , email , senha : senhaCriptografica}
        
        await knex('usuarios').insert(novoUsuario);

        return res.status(201).json('cadastro feito com sucesso.')
        
    } catch (error) {
      return res.status(400).json({ messagem : error.message })
    }
}

const editarUsuario = async (req, res) => {
    const token = req.token;
    const { nome, email, senha } = req.body;
    const { id } = jwt.decode(token, senhajwt);
  
    try {
      const novaSenha = await bcrypt.hash(senha, 10);
  
      const usuarioEditado = await knex("usuarios").where({ id }).update({
          nome,
          email,
          senha: novaSenha,
        })
        .returning(["id", "nome", "email"]);
  
      return res.status(201).json(usuarioEditado[0]);
    } catch (error) {
      return res.status(400).json({ messagem : error.message })
    }
  };

module.exports = { 
    cadastroUsuario,
    editarUsuario
}