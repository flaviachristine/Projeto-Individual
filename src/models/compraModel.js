var database = require("../database/config")


function cadastrar(usuario, produto, quantidade, preco) {
    var instrucao = `
        INSERT INTO compra (fkUsuario, itemComprado, qtdComprada, valorCompra) VALUES (${usuario}, '${produto}', ${quantidade}, ${preco});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};