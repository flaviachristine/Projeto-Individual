// O ambiente agora é definido pela variável de ambiente AMBIENTE_PROCESSO.
// - Na Vercel: a variável VERCEL sempre existe, então o ambiente vira 'producao'
//   e as credenciais vêm do painel da Vercel (não de arquivos .env).
// - Localmente: como nenhuma das duas existe, cai em 'desenvolvimento' e lê o .env.dev.
var ambiente_processo = process.env.AMBIENTE_PROCESSO || (process.env.VERCEL ? 'producao' : 'desenvolvimento');

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

// Na Vercel o arquivo .env não é enviado; o dotenv simplesmente não encontra nada
// e as variáveis já injetadas pela plataforma continuam valendo.
require("dotenv").config({ path: caminho_env });
process.env.AMBIENTE_PROCESSO = ambiente_processo;

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT || 3333;
var HOST_APP = process.env.APP_HOST || "localhost";

var app = express();
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var vendaRouter = require("./src/routes/venda");
var dashRouter = require("./src/routes/dash");
var compraRouter = require("./src/routes/compra");
// var empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/quiz", quizRouter);
app.use("/venda", vendaRouter);
app.use("/dash", dashRouter);
app.use("/compra", compraRouter);
// app.use("/empresas", empresasRouter);

// Na Vercel quem "escuta" as requisições é a própria plataforma (Serverless Function),
// por isso o app.listen() só roda quando estamos na máquina local.
if (!process.env.VERCEL) {
    app.listen(PORTA_APP, function () {
        console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara rodar como producao localmente, defina AMBIENTE_PROCESSO=producao antes de iniciar.\n\n`);
    });
}

// Exporta o app para que a Vercel (api/index.js) consiga usá-lo como Serverless Function.
module.exports = app;
