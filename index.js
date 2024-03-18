const express = require("express");

const app = express();

app.get("/soma", (req, res) => {
    const soma = 2 + 2; // Corrigido o cálculo da soma
    res.send('O resultado da soma é: ' + soma);
});

app.listen(3001, () => console.log("Servidor online na porta 3001"));
