/* Listas */

/* IN & NOT IN
SELECT * FROM productos WHERE precio IN (5,6,7,8,9,10);

SELECT * FROM productos WHERE precio NOT IN (5,6,7,8,9,10);
*/

/* BETWEEN DATE
SELECT * FROM productos WHERE DATE(fecha_alta) BETWEEN '2015-01-01' AND '2016-07-24';
*/

/* Operadores Arítmeticos */
SELECT * FROM productos WHERE precio = 5 + 5;

/* AVG */
SELECT nombre, AVG(precio) AS promedio_precios FROM productos WHERE idCategoria = 1 GROUP BY nombre;
SELECT nombre, precio FROM productos WHERE idCategoria = 1;