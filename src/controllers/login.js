const jwt = require('jsonwebtoken')
const senhajwt = require('../senha')

const login = (req, res) => {
    const {id, nome , email} = req.body

    try {
        const token = jwt.sign({id},senhajwt);
       
        const usuario = {
            id,
            nome,
            email
        }

        return res.status(201).json({usuario , token}) 

    } catch (error) {
        return res.status(400).json({ messagem : error.message })
    }

} 

module.exports = login