/* 
Logica de Programación 4

1.- Solicitar un numero por prompt o input y guardarlo
2.- Imprimir la serie de Fibonacci hasta el numero recibido por el prompt
3.- Imprimir el resultado por consola o por el DOM
4.- Identificar si el dato ingresado es de tipo number, en caso contrario, mandar error y solicitar el dato

Entrada: 3 | Salida: 0, 1, 1
Entrada: 10 | Salida: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

// Definimos variables para utilizarlas en diferentes momentos
let limite // Guarda el numero ingresado por el usuario
let n1 = 0 // Se usa para guardar el valor de la izquierda en el par de numeros evaluados dentro de la serie de Fibonacci
let n2 = 1 // Se usa para guardar el valor de la derecha en el par de numeros dentro de la serie de Fibonacci
let aux = 0 // Se usa para almacenar el valor posterior (suma de n1 y n2) del par de numeros evaluados dentro de la serie
let arr = [] // Arreglo vacio para almacenar la serie de Fibonacci calculada

// Do while que se ejecutará siempre que el valor ingresado no sea un numero
do {

    limite = Number(prompt("Ingresa el numero de elementos que deseas obtener de la serie de Fibonacci"))

    // Si el valor ingresado no es un numero, entonces se mostrará un mensaje de error para solicitar los datos nuevamente
    if (isNaN(limite)) {
        
        alert("ERROR: Los datos ingresados son invalidos. Favor de volver a ingresarlos")

    }

} while (isNaN(limite));

// Se almacenan n1 y n2 dentro del arreglo para que sean los valores iniciales (0 y 1) dentro de la serie de Fibonacci
arr.push(n1)
arr.push(n2)

// Ciclo for que recorrera el valor ingresado (menos 2 que corresponde a los dos valores ya almacenados en el arreglo)
for (let i = 1; i <= limite-2; i++) {

    // Aux será igual al valor siguiente de la serie de Fibonacci actual
    aux = n1 + n2

    // Se almacena el valor de aux en el arreglo
    arr.push(aux)

    // El valor de la izquierda ahora tiene el valor del numero de la derecha
    n1 = n2
    // El valor de la derecha ahora tiene el nuevo valor almacenado en aux
    n2 = aux
    
}

// Se muestra la serie completa por consola
console.log(`La serie de Fibonacci hasta el numero ${limite} es: ${arr}`);