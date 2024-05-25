create database cadastro

create table if not exists usuarios (
   id serial primary key,
   nome text not null,
   email text not null,
   senha text not null
 );


create table if not exists categorias(
 id serial primary key,
 descricao varchar(100)
);


create table if not exists transacoes (
id serial primary key,
descricao varchar(60),
valor int,
data date,
categoria_id int references categorias(id),
usuario_id int references usuarios(id),
tipo varchar(60)
);

insert into categorias(descricao)
values ('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('utras receitas'),
('Outras despesas')





