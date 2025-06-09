var express = require("express");
var router = express.Router();

var compraController = require("../controllers/compraController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /compras/cadastrar
    compraController.cadastrar(req, res);
});

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /compras/listar
//     compraController.listar(req, res);
// });

module.exports = router;