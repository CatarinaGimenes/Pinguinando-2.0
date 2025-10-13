var cardjitsuModel = require("../models/cardjitsuModel");

function cadastrar(req, res) {
    var nome = req.body.nome;
    var senha = req.body.senha;

    cardjitsuModel.cadastrar(nome, senha).then((resultado) => {
            res.status(201).json(resultado);
    });
}

function validar(req, res) {
	var nome = req.params.nome;

	cardjitsuModel.validar(nome).then((resultado) => {
		res.status(201).json(resultado);
	});
}

function logar(req, res) {
	var nome = req.body.nome;
	var senha = req.body.senha;

	cardjitsuModel.logar(nome, senha).then((resultado) => {
		res.status(201).json(resultado);
	});
}

module.exports = {
	cadastrar,
    validar,
    logar,
};