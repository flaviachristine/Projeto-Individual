var database = require("../database/config")

function cadastrar(personagem, idUsuario) {
    
    var instrucao = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, npc) VALUES (${idUsuario}, 1, '${personagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};