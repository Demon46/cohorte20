
let nombres = ['Raul', 'Oscar', 'Jeronimo', 'Jonathan', 'Victor']

console.log(nombres);

//Arreglos
let arr1 = new Array('Raul', 3, true)
console.log(arr1);
console.log(arr1[1]);

arr1[3] = 234
console.log(arr1[3]);

arr1[10] = 5
console.log(arr1);

arr1[10] = 'GDL'

//
let arr2 = []
arr2[0] = 2

console.log(arr2);

/*Un arreglo const no cambia debido a que unicamente 
trabajmos con los datos dentro del arreglo y no con el tipo
del arreglo
*/

/* Arreglos multidimensionales o matrices = un arreglo dentro de otro arreglo */
const arr3 = [1, 'Adios', false, [1]]
console.log(arr3[3][0]);