const app = require('./servidor');

const porta = process.env.PORT || 3000

app.listen(porta,() => {
    console.log(`Servidor esta rodando na Porta ${porta}`)
})