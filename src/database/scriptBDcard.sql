create database pinguinando2;

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
status boolean,
player1 int,
player2 int,
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