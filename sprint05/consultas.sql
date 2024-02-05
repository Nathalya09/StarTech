SELECT categoria.id as id_categoria, categoria.nome as categoria, produto.id as id_produto, produto.nome as produto, produto.preco as preco
FROM categoria
INNER JOIN produto ON categoria.id=produto.categoria_id;

SELECT cliente.nome as cliente, categoria.nome as categoria, produto.nome as produto, item_pedido.preco_unitario as preco_unitario, item_pedido.quantidade as quantidade, pedido.data as data from cliente
INNER JOIN pedido on cliente.id = pedido.cliente_id
INNER JOIN item_pedido on pedido.id = item_pedido.pedido_id
INNER JOIN produto on item_pedido.produto_id = pedido.id
INNER JOIN categoria on categoria.id = produto.categoria_id
ORDER BY cliente.nome, categoria.nome;

SELECT categoria.nome, 
sum(item_pedido.preco_unitario * item_pedido.quantidade) as total from categoria 
INNER JOIN produto on categoria.id = produto.categoria_id 
INNER JOIN item_pedido on item_pedido.produto_id = produto.id 
GROUP BY categoria.nome
ORDER BY sum(item_pedido.preco_unitario * item_pedido.quantidade) desc;