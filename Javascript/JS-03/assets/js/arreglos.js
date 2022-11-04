
const numeros = [2, 4, 6, 57, 200]

// forEach - Recorre todo el arreglo y ejecuta el codigo que le indiquemos sobre los valores guardados

let suma = 0

numeros.forEach( (el, i) => {

    suma += el

    console.log(i, suma);

})

console.log(suma);

/* map - mapea un arreglo (crea un arreglo nuevo a partir de otro) */

let newArr = numeros.map( (el) => {

    return el * el
    
})

console.log(newArr);

/* filter - crea un arreglo a partir de otro, pero solamente agrega los elementos que le especifiquemos */

const frutas = ['papaya', 'manzana', 'manzana', 'uva']

let filtFrutas = frutas.filter( (fruta, i) => i < 2)

console.log(filtFrutas);