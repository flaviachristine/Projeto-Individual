var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashController.js
router.post("/qtdQuiz", function (req, res) {
    dashController.qtdQuiz(req, res);
})

router.post("/npcMaisTirado", function (req, res) {
    dashController.npcMaisTirado(req, res);
})

router.post("/itensVendidos", function (req, res) {
    dashController.itensVendidos(req, res);
})
router.post("/itensComprados", function (req, res) {
    dashController.itensComprados(req, res);
})
router.post("/valorVendas", function (req, res) {
    dashController.valorVendas(req, res);
})

router.post("/graficoNpc", function (req, res) {
    dashController.graficoNpc(req, res);
})

router.post("/graficoCarteira", function (req, res) {
    dashController.graficoCarteira(req, res);
})

module.exports = router;