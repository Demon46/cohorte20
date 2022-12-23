/* 
Logica de Programación 3

1.- Solicitar un numero por prompt o input y guardarlo
2.- Calcular el factorial del numero guardado
3.- Imprimir el resultado por consola o por el DOM
4.- Identificar si el dato ingresado es de tipo number, en caso contrario, mandar error y solicitar el dato

Entrada: 5 | Salida: 120
Entrada: 6 | Salida: 720
*/

// Creamos la variable para funcionar de entrada y una variable auxiliar para servir como acumulador de operaciones
let input
let aux = 1

// Do while que se va a seguir ejecutando si los datos ingresados no son numeros
do {

    input = Number(prompt("Ingresa el numero del cual deseas obtener su factorial"))
    
    // Si los datos no son de tipo numerico, entonces se mostrará un mensaje pidiendo que se vuelva a ingresar los datos
    if (isNaN(input)) {
        alert("ERROR: Los datos ingresados no son validos. Favor de ingresar solo datos numericos")
    }

} while (isNaN(input));

// Ciclo for que se va ejecutar desde 1 (valor inicial del factorial) hasta el numero ingresado por el usuario (numero final a multiplicar en el factorial)
for (let i = 1; i <= input; i++) {
    
    // El auxiliar irá multiplicando cada numero en el contador del for y guardando el resultado final
    aux *= i

}

// Se muestra el resultado por consola
console.log(`El factorial de ${input} es ${aux}`);