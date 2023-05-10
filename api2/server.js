const { response } = require("express");
const { request } = require("https");

const express = reqquire("express");

const app = express();

app.get("/teste", (request, response) => {
    response.send({ data: "Susesso!" });
});

app.post("/login", (request, response) => {
    const { usuario, senha } = request.body

    response.send({
        mensagem: "Autenticacao realizada  com susseso",
        data: `${usuario} - ${senha}`

    })
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(" Servidor esta on  Pizadaaaa na porta: 8080");
    }
})