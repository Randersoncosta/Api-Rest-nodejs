const knex = require("../conexao");

const validarCategoria = async (req, res, next) => {
  const { tipo, categoria_id } = req.body;
  try {
    const validarCategoria = await knex('categorias').where('id', categoria_id);
    

    if (validarCategoria.rowCount = 0) {
      return res.status(401).json({ mensagem: " Erro ao cadastrar, id de categoria inválida" });
    }

    if (tipo != "entrada" && tipo != "saida") {
      return res.status(401).json({ mensagem: " Erro ao cadastrar, tipo de transação inválida" });
    }

    next()
  } catch (error) {
    return res.status(400).json({messagem: error.message})
  }
}
module.exports = validarCategoria