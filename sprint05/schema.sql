CREATE DATABASE Comex;

CREATE TABLE categoria(
id bigint auto_increment PRIMARY KEY,
nome varchar(100));

CREATE TABLE produto(
id bigint auto_increment PRIMARY KEY,
nome varchar(255),
preco decimal(10,2),
categoria_id bigint, 
FOREIGN KEY (categoria_id) references categoria(id));

CREATE TABLE cliente(
id bigint auto_increment PRIMARY KEY,
nome varchar(255));

CREATE TABLE pedido(
id bigint auto_increment PRIMARY KEY,
data datetime,
cliente_id bigint,
FOREIGN KEY (cliente_id) references cliente(id));

CREATE TABLE item_pedido(
id bigint auto_increment PRIMARY KEY,
pedido_id bigint,
produto_id bigint,
FOREIGN KEY (pedido_id) references pedido(id),
FOREIGN KEY (produto_id) references produto(id),
preco_unitario decimal(10,2),
quantidade integer);
