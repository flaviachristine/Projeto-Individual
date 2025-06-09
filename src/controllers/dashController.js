var dashModel = require("../models/dashModel");

function qtdQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.qtdQuiz(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function npcMaisTirado(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.npcMaisTirado(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function itensVendidos(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.itensVendidos(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function valorVendas(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.valorVendas(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function graficoNpc(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.graficoNpc(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function graficoCarteira(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    dashModel.graficoCarteira(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    qtdQuiz,
    npcMaisTirado,
    itensVendidos,
    valorVendas,
    graficoNpc,
    graficoCarteira
}