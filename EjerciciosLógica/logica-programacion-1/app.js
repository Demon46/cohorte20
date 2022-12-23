/*
Logica de Programación 1

1.- Solicitar al usuario 3 numeros por prompt y guardarlos en sus respectivas variables
2.- Analizar los numeros e identificar cual es el numero mayor, el del centro y el menor
3.- Imprimir los numeros por consola o por el DOM ordenados de mayor a menor y de menor a mayor
4.- Identificar si los numeros son iguales e imprimir un mensaje por consola o por DOM diciendo que los numeros son iguales

Entradas: 4, 4, 2 y Salidas: 4, 4, 2 y 2, 4, 4
Entradas: 4, 2, 4 y Salidas: 4, 4, 2 y 2, 4, 4
Entradas: 2, 4, 4 y Salidas: 4, 4, 2 y 2, 4, 4
*/

// Guardamos los numeros ingresados
let a = Number(prompt("Dame el primer numero"))
let b = Number(prompt("Dame el segundo numero"))
let c = Number(prompt("Dame el tercer numero"))

// Creamos un arreglo para guardar los numeros ordenados
let arr = []

// Mostramos las entradas y salidas por consola
console.log(`Las entradas son: ${a}, ${b}, ${c}`);
console.log("Las salidas de mayor a menor y de menor a mayor son:");

// Comparamos si los tres numeros son iguales
if(a === b && b === c){

    // Si los tres son iguales se manda un mensaje y se termina el programa
    console.log("Los tres numeros son iguales");

} else {

    // Si el primer numero es mayor que el segundo...
    if (a >= b) {

        // Y si el segundo es mayor que el tercero...
        if (b >= c) {
            // El codigo a continuación se repite en todos los casos

            // Mandamos los numeros en orden al arreglo
            arr.push(a)
            arr.push(b)
            arr.push(c)

            // Imprimimos el arreglo convertido a texto
            console.log(String(arr));
            // Imprimimos el arreglo invertido convertido a texto
            console.log(String(arr.reverse()));

        // Si el tercero es mayor que el segundo 
        } else{

            // Y si el primero es mayor que el tercero
            if (a >= c) {

                arr.push(a)
                arr.push(c)
                arr.push(b)
    
                console.log(String(arr));
                console.log(String(arr.reverse()));

            // Y si el tercero es mayor que el tercero
            } else {

                arr.push(c)
                arr.push(a)
                arr.push(b)
    
                console.log(String(arr));
                console.log(String(arr.reverse()));

            }

        }

    // Si el segundo es mayor que el primero
    } else {

        // Si el primero es mayor que el tercero
        if (a >= c) {

            arr.push(b)
            arr.push(a)
            arr.push(c)

            console.log(String(arr));
            console.log(String(arr.reverse()));

        // Si el tercero es mayor que el primero
        } else{

            // Si el segundo es mayor que el tercero
            if (b >= c) {

                arr.push(b)
                arr.push(c)
                arr.push(a)
    
                console.log(String(arr));
                console.log(String(arr.reverse()));

            // Si el tercero es mayor que el segundo
            } else {

                arr.push(c)
                arr.push(b)
                arr.push(a)
    
                console.log(String(arr));
                console.log(String(arr.reverse()));

            }

        }

    }

}