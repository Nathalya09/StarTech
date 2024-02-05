insert into categoria (nome) values ('Automotiva'), ('Celulares'), ('Info'), ('Livros'), ('Móveis');

insert into cliente (nome) values ('ANA'), ('BIA'), ('CAIO'),('DANI'), ('ELI'), ('GABI');

insert into produto (nome, preco, categoria_id) values ('Notebook Samsung', 3523.00, 3),
('Sofá 3 lugares', 2500.00, 5), ('Clean Architecture', 102.90, 4), ('Mesa de jantar 6 lugares', 3678.98, 5),
('Iphone 13 Pro', 9176.00, 2), ('Monitor Dell 27', 1889.00, 3), ('Implementing Domain-Driven Design', 144.07, 4),
('Jogo de pneus', 1276.79, 1), ('Clean code', 95.17, 4), ('Galaxy S22 Ultra', 8549.10, 2),
('Macbook pro 16', 31752.00, 3), ('Refactoring Improving the Design of Existing Code', 173.90, 4), ('Cama queen size', 3100.00, 5),
('Central multimidia',711.18, 1), ('Building Microservices', 300.28, 4), ('Galaxy Tab S8',5939.10, 2);

insert into pedido(data, cliente_id) values ('2022-01-01', 1),
('2022-01-05', 1), ('2022-01-08', 1), ('2022-01-06',5),
('2022-01-13', 1), ('2022-01-04', 4), ('2022-01-10', 6),
('2022-01-15', 2), ('2022-01-09', 2), ('2022-01-14', 4),
('2022-01-03', 3), ('2022-01-12', 4), ('2022-01-07', 4),
('2022-01-16', 3), ('2022-01-11', 3), ('2022-01-02', 2);

insert into item_pedido (pedido_id, produto_id, preco_unitario, quantidade) values (1, 1, 3523.00, 1),
(2, 2, 2500.00, 1), (3, 3, 51.45, 2), (4, 4, 3678.98, 1),
(5, 5, 1529.33, 6), (6, 6, 629.66, 3), (7, 7, 48.00, 3),
(8,8, 1276.79, 1), (9, 9, 95.17, 1), (10, 10, 1709.8, 5),
(11, 11, 31752.00, 1), (12, 12, 173.90, 1), (13, 13, 1550.00, 2),
(14, 14, 711.18, 1), (15, 15, 150.14, 2), (16, 16, 1484.77, 4);