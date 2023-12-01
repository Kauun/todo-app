const express = require("express")

const app = express()

app.get('/', ( requisicao, resposta ) => {
    resposta.send("Olá mundo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na Porta 3000!")
})