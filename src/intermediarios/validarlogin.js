const knex = require('../conexao')
const bcrypt = require('bcrypt')

const validarLogin = async (req, res, next) => {
    const {email , senha} = req.body

    try {
        const usuarioLogado = await knex('usuarios').where('email' , email).first();
        
        if(!usuarioLogado)
        {
            return res.status(404).json({mensagem : "email ou senha estão incorretos." })
        }

        const validarSenha = bcrypt.compare(senha, usuarioLogado.senha)

        if(!validarSenha){
            return res.status(404).json({mensagem : "email ou senha estão incorretos." })
        }

        req.body = {
            id : usuarioLogado.id,
            nome : usuarioLogado.nome,
            email : usuarioLogado.email
        }

        next()
    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }
}

module.exports = validarLogin