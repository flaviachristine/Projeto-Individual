create database stardew_project;

use stardew_project;

create table usuario(
	idUsuario int primary key auto_increment,
	nome VARCHAR(45) not null,
	email VARCHAR(45) not null unique,
	senha VARCHAR(45) not null
);

create table quiz(
	idQuiz int primary key auto_increment,
    qtdQuestoes int,
    tema varchar(45)
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
	npc varchar(20)
);

create table venda(
	idVenda int primary key auto_increment,
	fkUsuario int,
	constraint fkUsuarioVenda foreign key (fkUsuario) references usuario(idUsuario),
	qtdVendida int,
	itemVendido varchar(50),
	valorVenda int,
	dtVenda datetime default current_timestamp
);

select * from usuario;
select * from tentativa;

