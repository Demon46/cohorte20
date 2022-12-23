/* 
Logica de Programación 5

1.- Solicitar un numero por prompt que coincida con un numero secreto
2.- Mostrar un mensaje de incorrecto cada vez que el usuario no acerte el numero
3.- Mostrar un mensaje de victoria cuando el usuario acerte el numero secreto
4.- El numero puede ser introducido por prompt o ser generado manualmente
5.- Imprimir el mensaje de victoria y los numeros ingresados antes de encontrar dicho numero

Entrada: | Salida: 
Entrada: | Salida: 
*/

let input // Entrada del usuario
let secreto = Math.floor(Math.random() * 100) + 1 // Numero generado aleatoriamente
let arr = [] // Arreglo donde se van a guardar los numeros incorrectos ingresados por el usuario

// Do while que se va a encargar de ejecutar el codigo al menos una vez para garantizar que siempre se va a poder iniciar el programa
do {

    // Segundo do while que se seguirá ejecutando hasta que el dato ingresado sea de tipo numerico
    do {

        input = Number(prompt("Intenta adivinar el numero secreto entre 1 y 100"))

        // Si el dato ingresado no es un numero, entonces se mostrará el mensaje por alerta
        if (isNaN(input)) {
            
            alert("ERROR: Datos ingresados no validos. Favor de ingresar los datos nuevamente")
    
        }
    
    } while (isNaN(input));

    // Se compara si el dato ingresado está entre 1 y 100, en caso contrario se arroja una notificación
    if (input >= 1 && input <= 100) {
        
        // Si el dato coincide con el numero secreto, se manda el mensaje de felicitacion
        if (input === secreto) {
        
            alert("Felicidades, adivinaste el numero secreto");
    
        // En caso contrario, se muestra el mensaje para que el usuario lo vuelva a intentar
        } else {
            
            alert("Ups, numero incorrecto, vuelve a intentarlo");
    
        }

    } else {
        
        alert("El numero secreto está entre 1 y 100")

    }

    // Se almacena el valor ingresado en el arreglo
    arr.push(input)

} while (input != secreto);

// Mensaje que muestra los intentos que se necesitaron y los numeros que se ingresaron antes de encontrar el numero
console.log(`Te tomó ${arr.length} intentos. Estos son los numeros que ingresaste: ${arr}`);