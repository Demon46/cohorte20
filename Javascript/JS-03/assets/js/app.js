/* Control de Flujo */

let h1 = document.querySelector('#h1')

/* let edad = Number(prompt('Ingresa tu edad: '))

if ((edad > 0) && (edad <= 17)) {
    h1.innerHTML = 'Tas chiquito'
} else if (edad === 18) {
    h1.innerHTML = 'Eres mayor de edad'
} else if (edad > 18) {
    h1.innerHTML = 'Todavía estás jovén'
} else if (edad < 0){ 
    h1.innerHTML = 'Lo siento, es un numero negativo'
} else {
    h1.innerHTML = 'Lo siento, ingresa una edad válida'
}

console.log(isNaN(edad));
console.log(typeof edad); */

/*********************** */

let dia = Number(prompt('Ingresa un numero del 1 al 7'))

switch (dia) {

    case 1:
        
        document.write('Lunes')

        break;

    case 2:

        document.write('Martes')

        break;

    case 3:

        document.write('Miercoles')

        break;

    case 4:

        document.write('Jueves')

        break;

    case 5:

        document.write('Viernes')

        break;

    case 6:

        document.write('Sabado')

        break;

    case 7:

        document.write('Domingo')

        break;

    default:

        document.write('No es un numero válido')

        break;
}