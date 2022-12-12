/* LIKE & NOT LIKE*/

SELECT * FROM productos WHERE nombre LIKE 'limonada';

SELECT * FROM productos WHERE nombre LIKE 'limon%';

SELECT * FROM productos WHERE nombre LIKE '%limon';

SELECT * FROM productos WHERE nombre NOT LIKE '%limon%';