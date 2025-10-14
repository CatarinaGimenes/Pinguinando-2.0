var database = require("../database/config");

function cadastrar(nome, senha) {
    var instrucaoSql = `
    INSERT INTO jogador (nome, senha, moedas) values ('${nome}', '${senha}', 1000);
    `

    return database.executar(instrucaoSql);
}

function validar(nome) {
    var instrucaoSql = `
    select nome from jogador where nome = '${nome}';
    `
    return database.executar(instrucaoSql);
}

function logar(nome, senha) {
    var instrucaoSql = `
    select idJogador, nome, senha from jogador where nome = '${nome}' and senha = '${senha}';
    `

    return database.executar(instrucaoSql);
}

function procurarSala() {
    var instrucaoSql = `
    select * from sala where statusSala = 1 and privacidade = 1 and lotacao = 0;
    `
    return database.executar(instrucaoSql);
}

function inserirP2(player2, idSala) {
    var instrucaoSql = `
    update sala set player2 = ${player2}, lotacao = 1 where idSala = ${idSala};
    `

    return database.executar(instrucaoSql);
}

function criarSala(codigo, idJogador) {
    var instrucaoSql = `
    insert into sala (codigo, statusSala, player1, privacidade, lotacao) values ('${codigo}', 1, ${idJogador}, 1, 0);
    `

    return database.executar(instrucaoSql);
}

module.exports = { 
    cadastrar,
    validar,
    logar,
    procurarSala,
    inserirP2,
    criarSala,
};