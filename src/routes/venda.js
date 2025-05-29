var express = require("express");
var router = express.Router();

var vendaController = require("../controllers/vendaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /vendas/cadastrar
    vendaController.cadastrar(req, res);
});

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /vendas/listar
//     vendaController.listar(req, res);
// });

module.exports = router;