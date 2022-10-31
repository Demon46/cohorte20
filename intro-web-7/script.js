console.log('Hola mundo');

/* Ejercicio 1 - Tipos de variables */

let nombre = 'Oscar'
let edad = 26
let mayorEdad = true
let vacaciones = null
let trabajo = undefined

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(mayorEdad));
console.log(typeof(vacaciones));
console.log(typeof(trabajo));

console.log(Number(false));

/* Ejercicio 2 - Calculo de edad */

/*let agnoNac = Number(prompt('Dame tu año de nacimiento: '))
let agnoAct = 2022

edad = ( agnoAct - agnoNac )

console.log('Hola, tienes ' + edad + ' años'); */

/* Ejercicio 3 - Tabla de conversion */

let dato7 = '000'
let dato8 = '1'
let dato15 = null
let dato16 = undefined

console.log('Dato 7 ' + dato7);
console.log(Number(dato7), typeof(Number(dato7)));
console.log(String(dato7), typeof(String(dato7)));
console.log(Boolean(dato7), typeof(Boolean(dato7)));

console.log('Dato 8 ' + dato8);
console.log(Number(dato8), typeof(Number(dato8)));
console.log(String(dato8), typeof(String(dato8)));
console.log(Boolean(dato8), typeof(Boolean(dato8)));

console.log('Dato 15 ' + dato15);
console.log(Number(dato15), typeof(Number(dato15)));
console.log(String(dato15), typeof(String(dato15)));
console.log(Boolean(dato15), typeof(Boolean(dato15)));

console.log('Dato 16 ' + dato16);
console.log(Number(dato16), typeof(Number(dato16)));
console.log(String(dato16), typeof(String(dato16)));
console.log(Boolean(dato16), typeof(Boolean(dato16)));