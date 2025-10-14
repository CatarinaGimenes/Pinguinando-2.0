var express = require("express");
var router = express.Router();

var cardjitsuController = require("../controllers/cardjitsuController");

router.post("/cadastrar", function (req, res) {
    cardjitsuController.cadastrar(req, res);
})

router.get("/validar/:nome", function (req, res) {
    cardjitsuController.validar(req, res);
})

router.post("/logar", function (req, res) {
    cardjitsuController.logar(req, res);
})

router.get("/procurarSalas", function (req, res) {
    cardjitsuController.procurarSala(req, res);
})

router.post("/inserirP2", function (req, res) {
    cardjitsuController.inserirP2(req, res);
})

router.post("/criarSala", function (req, res) {
    cardjitsuController.criarSala(req, res);
})

module.exports = router;