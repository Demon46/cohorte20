
// Propiedades de arreglos
// Length

const frutas = ["Pera", "Manzana", "Guayaba", "Plátano"]
console.log(frutas);

console.log(frutas.length);

// Métodos = acciones
// push() - agrega un elemento al final de un arreglo

frutas.push('Sandia', 'Limón')
console.log(frutas);

// unshift() - agrega un elemento al principio de un arreglo

frutas.unshift('Guanábana')
console.log(frutas);

// pop() - quita el último elemento de un arreglo

frutas.pop()
console.log(frutas);

// shift() - quita el primer elemento de un arreglo

frutas.shift()
console.log(frutas);

// indexOf() - obtener el índice de un elemento de un arreglo
console.log(frutas.indexOf('Plátano'));

// reverse() - invierte los elementos de un arreglo
console.log(frutas.reverse()); 

// sort() - ordenar un arreglo de manera ascendente (no es recomendable en arreglos con numeros)
console.log(frutas.sort());

const numeros = [4, 567, 2, 4566, 45, 78, 1]
console.log(numeros.sort());

// Funciones normales y funciones flecha
numeros.sort(function order(a, b) {
    return a - b
})

numeros.sort((a,b) => a - b) // Función callback

/* 
splice - sirve para eliminar y/o reemplazar elementos de un arreglo
splice(indce desde donde queremos cortar, cantidad de elementos que vamos a cortar, elemento(s) que queremos reemplazar)
*/