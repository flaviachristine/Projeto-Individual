var mysql = require("mysql2");

// CONEXÃO DO BANCO MYSQL SERVER
var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

// Bancos MySQL hospedados na nuvem (Aiven, Railway, Clever Cloud, RDS...) normalmente
// exigem conexão criptografada. Defina DB_SSL=true nas variáveis de ambiente da Vercel.
if (process.env.DB_SSL === "true") {
    mySqlConfig.ssl = process.env.DB_SSL_CA
        ? { ca: process.env.DB_SSL_CA }
        : { rejectUnauthorized: false };
}

function executar(instrucao) {

    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);

        // Sem este tratamento uma falha de conexão derruba o processo inteiro.
        // Na Vercel isso viraria um erro 500 sem nenhuma explicação no navegador.
        conexao.on("error", function (erro) {
            console.error("ERRO NO MySQL SERVER: ", erro.sqlMessage || erro.message);
            reject(erro);
        });

        conexao.connect(function (erroConexao) {
            if (erroConexao) {
                reject(erroConexao);
                return;
            }

            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                    return;
                }
                console.log(resultados);
                resolve(resultados);
            });
        });
    });
}

module.exports = {
    executar
};
