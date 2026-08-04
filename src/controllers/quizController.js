
var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var usuario = req.body.idUsuarioServer;
    var personagem = req.body.npcServer;

    
    // O "return" é obrigatório: sem ele o código continua e tenta responder duas
    // vezes na mesma requisição, o que derruba o servidor (ERR_HTTP_HEADERS_SENT).
    if (personagem == undefined) {
        return res.status(400).send("Seu nome está undefined!");
    } else if (usuario == undefined) {
        return res.status(400).send("Seu email está undefined!");
    }

    quizModel.cadastrar(personagem, usuario).then(function(resposta){
        res.status(200).send("Quiz criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}