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

function procurarSala(req, res) {

	cardjitsuModel.procurarSala().then((resultado) => {
		res.status(201).json(resultado);
	});
}

function inserirP2(req, res) {
    var player2 = req.body.player2;
    var idSala = req.body.idSala;

    cardjitsuModel.inserirP2(player2, idSala).then((resultado) => {
            res.status(201).json(resultado);
    });
}

function criarSala(req, res) {
    var codigo = req.body.codigo;
    var idJogador = req.body.idJogador;

    cardjitsuModel.criarSala(codigo, idJogador).then((resultado) => {
            res.status(201).json(resultado);
    });
}

module.exports = {
	cadastrar,
    validar,
    logar,
	procurarSala,
	inserirP2,
	criarSala,
};