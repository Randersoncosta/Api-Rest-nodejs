const verificaCopoRequisicao = (schemBody = null, schemaParams = null) => async (req,res,next) => {
    try {
        if(schemaParams){
            await schemaParams.validateAsync(req.params);
        }

        if(schemBody){
            await schemBody.validateAsync(req.body);
        }

        next()

    } catch (error) {
        return res.status(400).json({messagem : error.message })
    } 

}

module.exports = verificaCopoRequisicao