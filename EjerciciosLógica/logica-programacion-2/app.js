/* 
Logica de Programación 2

1.- Solicitar la temperatura en grados Celsius por prompt o input
2.- Convertir la temperatura ingresada a grados Fahrenheit y Kelvin
3.- Imprimir ambos resultados por consola o por el DOM
4.- Identificar si los datos de entrada son de tipo Number, en caso contrario, mandar mensaje de error y soliciar los datos

Entrada: 45 | Salida: F= 113 y K= 318.15
Entrada: 14 | Salida: F= 57.2 y K= 287.15
*/

// Variables para almacenar la entrada y los valores convertidos
let c
let f
let k

// Do while para ejecutar indefinidamente la acción de ingresar los grados centigrados SI esto no es un numero
do {
    
    // Guardamos los datos y los convertimos a numeros
    c =  Number(prompt("Ingresa la temperatura en grados Celsius (C)"))

    // Si los datos obtenidos no son un numero, entonces se manda un mensaje de error para solicitar los datos de manera correcta
    if (isNaN(c)) {
        alert("ERROR: Datos ingresados no validos. Favor de ingresar solamente carácteres númericos");
    }

} while (isNaN(c));

// Conversion de celsius a fahrenheit
f = (c * 1.8) + 32

// Conversión de celsius a kelvin
k = 273.15 + c

// Mostramos los resultados por consola
console.log(`${c} grados centigrados son: \n- ${f} grados fahrenheit \n- ${k} grados kelvin`);