var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /quizs/cadastrar
    quizController.cadastrar(req, res);
});


module.exports = router;