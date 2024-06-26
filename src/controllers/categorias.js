const knex = require("../conexao")

const listaCategoria = async (req, res) => {
    try {
        const categorias = await knex('categorias');

        if (categorias.length === 0) {
            return res.status(404).json({ messagem : "Nenhuma categoria encontrada." });
        }

        return res.status(200).json(categorias);

    } catch (error) {
        return res.status(404).json({messagem: error.message})
    }
}

module.exports = listaCategoria