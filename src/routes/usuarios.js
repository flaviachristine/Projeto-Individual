var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/carteira", function (req, res) {
    usuarioController.carteira(req, res);
});

router.post("/attCarteira", function (req, res) {
    usuarioController.attCarteira(req, res);
});
router.post("/valorCarteiraAtualizado", function (req, res) {
    usuarioController.valorCarteiraAtualizado(req, res);
});
module.exports = router;