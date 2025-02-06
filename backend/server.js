const express = require('express');
const bodyPaser = require('body-parser');
const sendEmail = require('./sendEmail');

const app = express();
app.use(bodyPaser.json());

app.post('send-email', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const assunto = `Contato de ${nome}`;
    const texto = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    sendEmail(`angioflex@angioflex.com.br`, assunto, texto);

    res.status(200).send('Email enviado com sucesso');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});