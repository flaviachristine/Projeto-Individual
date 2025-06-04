var database = require("../database/config")

function qtdQuiz(idUsuario) {
    var instrucao = `
        SELECT COUNT(idTentativa) FROM tentativa WHERE fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function npcMaisTirado(idUsuario) {
    var instrucao = `
        SELECT npc, COUNT(npc) AS ocorrencia FROM tentativa WHERE fkUsuario = ${idUsuario} GROUP BY npc ORDER BY npc ASC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function itensVendidos(idUsuario) {
    var instrucao = `
        select itemVendido, qtdVendida from venda where fkUsuario = ${idUsuario} group by itemVendido, qtdVendida order by qtdVendida Desc limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function valorVendas(idUsuario) {
    var instrucao = `
        select sum(valorVenda) from venda where fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function valorVendas(idUsuario) {
    var instrucao = `
        select sum(valorVenda) from venda where fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function graficoNpc(idUsuario) {
    var instrucao = `
        select npc, count(npc) as npcs from tentativa where fkUsuario = ${idUsuario} group by npc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    qtdQuiz,
    npcMaisTirado,
    itensVendidos,
    valorVendas,
    graficoNpc
};