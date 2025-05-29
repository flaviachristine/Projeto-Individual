var vendaModel = require("../models/vendaModel");

function cadastrar(req, res) {
    var usuario = req.body.idUsuarioServer;
    var produto = req.body.produtoServer;
    var quantidade = req.body.qtdServer;
    var preco = req.body.precoServer

    if (produto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if(quantidade == undefined){
        res.status(400).send("Seu nome está undefined!");
    } else if(usuario == undefined){
        res.status(400).send("Seu nome está undefined!");
    } else if(preco == undefined){
        res.status(400).send("Seu nome está undefined!");
    }

    vendaModel.cadastrar(usuario, produto, quantidade, preco).then(function(resposta){
        res.status(200).send("venda criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}