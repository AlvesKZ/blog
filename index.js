const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo ao meu site");
});

app.listen(3003, () => {
    console.log("O servidor está rodando em http://localhost:3003 ");
    
});