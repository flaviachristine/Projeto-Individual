var database = require("../database/config")

function cadastrar(personagem, usuario) {
    
    var instrucao = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, npc) VALUES ('${usuario}', 1, '${personagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};