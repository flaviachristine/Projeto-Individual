var vendaModel = require("../models/vendaModel");

function cadastrar(req, res) {
    var usuario = req.body.idUsuarioServer;
    var produto = req.body.produtoServer;
    var quantidade = req.body.qtdServer;
    var preco = req.body.precoServer

    // O "return" é obrigatório: sem ele o código continua e tenta responder duas
    // vezes na mesma requisição, o que derruba o servidor (ERR_HTTP_HEADERS_SENT).
    if (produto == undefined) {
        return res.status(400).send("Seu nome está undefined!");
    } else if(quantidade == undefined){
        return res.status(400).send("Seu nome está undefined!");
    } else if(usuario == undefined){
        return res.status(400).send("Seu nome está undefined!");
    } else if(preco == undefined){
        return res.status(400).send("Seu nome está undefined!");
    }

    vendaModel.cadastrar(usuario, produto, quantidade, preco).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}