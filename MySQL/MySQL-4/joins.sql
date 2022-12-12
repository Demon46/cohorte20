/* Joins */

SELECT * FROM productos;
SELECT * FROM categoria;
SELECT * FROM proveedores;

/* INNER JOIN (Join interno)
SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p INNER JOIN categoria as c ON p.idCategoria = c.id;
*/

/* LEFT JOIN (Join a la izquierda)
SELECT p.nombre, p.precio, p.existencia, t.nombre FROM productos as p LEFT JOIN temp as t ON p.idCategoria = t.id;
*/

/* RIGHT JOIN (Join a la derecha)
SELECT p.nombre, p.precio, p.existencia, t.nombre FROM productos as p RIGHT JOIN temp as t ON p.idCategoria = t.id;
*/

/* UNION (Unir registros de varias tablas=)
SELECT * FROM proveedores;
SELECT * FROM categoria UNION
SELECT nombre, precio FROM productos;
*/

/* INNER JOIN para buscar coincidencias entre la tabla productos y la tabla categoria según los id relacionados entre ambas tablas*/
SELECT p.nombre AS producto, c.nombre AS categoria, pv.nombre AS proveedor FROM productos AS p 
INNER JOIN categoria AS c ON p.idCategoria = c.id
INNER JOIN detalle_producto_proveedor AS det ON p.idProducto = det.idProducto
INNER JOIN proveedores AS pv ON det.idProveedor = pv.Id; 

/*SELECT p.nombre AS producto, v.nombre AS proveedor FROM productos AS p INNER JOIN proveedores AS V ON (p.idProducto = );*/
