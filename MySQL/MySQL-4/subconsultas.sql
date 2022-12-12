/* Subconsultas */

SELECT * FROM productos WHERE idCategoria = 2 AND precio > 10 AND existencia BETWEEN 5 AND 20 AND fecha_alta IS NOT NULL;

SELECT * FROM categoria;

SELECT * FROM productos WHERE idCategoria IN (SELECT id FROM categoria WHERE id > 2);

SELECT * FROM productos WHERE idCategoria > 2;