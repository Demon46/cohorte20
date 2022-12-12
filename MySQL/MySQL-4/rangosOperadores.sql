USE tiendita;

/*SELECT * FROM productos;

SELECT  idCategoria, nombre, precio, existencia FROM productos WHERE idCategoria >= 2;*/

/* Max() y Min()
SELECT MIN(existencia) as Mínimo, MAX(existencia) as Máximo FROM productos;
*/

/* Limit
SELECT * FROM productos LIMIT 2, 8;
*/

/* Order By, Asc, Desc
SELECT * FROM productos ORDER BY nombre ASC;
*/

/* Operadores */
SELECT * FROM productos;

/* AND
SELECT * FROM productos WHERE (idCategoria >= 1 AND idCategoria <= 3) AND precio = 10 AND (existencia > 10 AND existencia < 30);
*/

/* OR
SELECT * FROM productos WHERE idCategoria = 1 OR precio = 10;
*/

/* Negadores -> != & <> 
SELECT * FROM productos WHERE idCategoria <> 1;
*/

/* NULL & NOT NULL
SELECT * FROM productos WHERE precio IS NOT NULL;
*/

/* BETWEEN & NOT BETWEEN
SELECT * FROM productos WHERE precio BETWEEN 5 AND 10;

SELECT * FROM productos WHERE precio BETWEEN 5 AND 10;
*/