
var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var usuario = req.body.idUsuario;
    var personagem = req.body.npc;

    
    if (personagem == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (usuario == undefined) {
        res.status(400).send("Seu email está undefined!");
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