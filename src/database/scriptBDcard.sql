create database if not exists pinguinando2;

use pinguinando2;

create table jogador (
idJogador int primary key auto_increment,
nome varchar(45) unique not null,
senha varchar(45) not null,
moedas int not null
);

create table carta (
idCarta int primary key auto_increment,
tipo varchar(45) not null,
numero int not null,
uri_imagem varchar(45) not null
);

create table sala (
idSala int primary key auto_increment,
codigo char(8),
statusSala boolean,
player1 int,
player2 int,
privacidade boolean,
lotacao boolean,
constraint fkP1 foreign key (player1) references jogador(idJogador),
constraint fkp2 foreign key (player2) references jogador(idJogador)
);

create table partida (
idPartida int primary key auto_increment,
dtFinal datetime,
XPp1 int,
XPp2 int, 
vencedor int,
perdedor int,
idSala int,
constraint fkVencedor foreign key (vencedor) references jogador(idJogador),
constraint fkPerdedor foreign key (perdedor) references jogador(idJogador),
constraint fkSala foreign key (idSala) references sala(idSala)
);

create table rodada (
idRodada int primary key auto_increment,
idSala int,
numRodada int,
cartaP1 int,
cartaP2 int,
vencedor varchar(45),
pontosP1 int,
pontosP2 int,
constraint fkCartaP1 foreign key (cartaP1) references carta(idCarta),
constraint fkCartaP2 foreign key (cartaP2) references carta(idCarta)
);

select * from jogador;

insert into sala (codigo, statusSala, privacidade) values
("12345678", 1, 1);

select * from jogador;

select * from sala;	

desc sala;

/*
statusSala 1-ativo 0-inativo
privacidade 1-publico 0-privado
lotacao 1-lotado 0-vazio
*/

insert into sala (codigo, statusSala, player1, privacidade, lotacao) values ('12345678', 1, 3, 1, 0);

select * from sala;