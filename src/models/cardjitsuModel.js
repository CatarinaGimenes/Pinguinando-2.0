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

module.exports = { 
    cadastrar,
    validar,
    logar,
};