create database stardew_project;

use stardew_project;

create table usuario(
	idUsuario int primary key auto_increment,
	nome VARCHAR(45) not null,
	email VARCHAR(45) not null unique,
	senha VARCHAR(45) not null,
    carteira int not null
); 

create table quiz(
	idQuiz int primary key auto_increment,
    qtdQuestoes int not null,
    tema varchar(45) not null
);
insert into quiz values
(1, 5, 'Personalidade');

create table tentativa(
	idTentativa int auto_increment,
	fkUsuario int,
	fkQuiz int,
		constraint pkComposta primary key (idTentativa, fkUsuario, fkQuiz),
		constraint fkTentativaUsuario 
			foreign key (fkUsuario) 
            references usuario(idUsuario),
		constraint fkTentativaQuiz 
			foreign key (fkQuiz) 
            references quiz(idQuiz),
	dtTentativa datetime default current_timestamp,
	npc varchar(20) not null
);

create table venda(
	idVenda int primary key auto_increment,
	fkUsuario int not null,
	constraint fkUsuarioVenda foreign key (fkUsuario) references usuario(idUsuario),
	qtdVendida int not null,
	itemVendido varchar(50) not null,
	valorVenda int not null,
	dtVenda datetime default current_timestamp
);
create table compra(
	idVenda int primary key auto_increment,
	fkUsuario int not null,
	constraint fkUsuarioCompra foreign key (fkUsuario) references usuario(idUsuario),
	qtdComprada int not null,
	itemComprado varchar(50) not null,
	valorCompra int not null,
	dtCompra datetime default current_timestamp
);

create table historicoCarteira(
	idHistorico int primary key auto_increment,
	valorCarteiraAtual int not null,
	fkUsuario int,
	constraint fkUsuarioHistorico foreign key (fkUsuario) references usuario(idUsuario),
    dataCarteira datetime default current_timestamp
);


