// Ponto de entrada da API na Vercel.
// A Vercel transforma automaticamente cada arquivo dentro da pasta /api em uma
// Serverless Function. Aqui apenas reaproveitamos o mesmo app Express que roda
// localmente, sem duplicar nenhuma rota.
module.exports = require("../app");
