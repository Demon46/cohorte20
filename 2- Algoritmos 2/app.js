// Prompt sirve para que el usuario ingrese datos
//let miVariable = prompt('Cual es tu nombre: ')

// Declaración de Función
/*function saludoPer(miVariable = '') {
    alert(miVariable)
}*/

// Suma
/*
function suma(){
    let num1 = Number(prompt('Valor 1: '))
    let num2 = Number(prompt('Valor 2: '))

    let resultado = num1 + num2

    return resultado
}*/

// Llamado de la Función
//saludoPer(miVariable)

/*let r = suma()
alert(r)*/

/*
alert(suma())

function resta(){
    let num1 = Number(prompt('Valor 1: '))
    let num2 = Number(prompt('Valor 1: '))

    let resultado = num1 - num2

    return resultado
}

alert(resta())

function resta(){
    let num1 = Number(prompt('Valor 1: '))
    let num2 = Number(prompt('Valor 1: '))

    let resultado = num1 - num2

    return resultado
}

alert(resta())

function resta(){
    let num1 = Number(prompt('Valor 1: '))
    let num2 = Number(prompt('Valor 1: '))

    let resultado = num1 - num2

    return resultado
}

alert(resta())
*/


// Multiplicación
function mult() {
    let num1 = 10
    let num2 = 3

    let resultado = num1 * num2

    return resultado
}

console.log('El resultado es: ' + mult())

// División
function div() {
    let num1 = 30
    let num2 = 1

    if (num2 > 0) {
        let resultado = num1 / num2
        return resultado
    } else {
        return console.error('ERROR: No se puede dividir entre 0');
    }


}

console.log('El resultado de división es: ' + div())

// Residuo
function resd() {
    let num1 = 7
    let num2 = 2

    let resultado = num1 % num2

    return resultado
}

console.log('El resultado del residuo es: ' + resd())

// Adicionales
function adicionales() {
    let num1 = 10

    let res = --num1

    return res
}

console.log('El resultado es: ' + adicionales())

// Funciòn Edad
/* function edad() {
    let miEdad = Number(prompt('Escribe tu edad: '))

    if (miEdad >= 18 && miEdad > 0) {
        return 'Eres mayor de edad'
    } else if (miEdad > 0) {
        return 'Eres menor de edad'
    } else {
        return 'ERROR: No es una edad valida'
    }
}

console.log(edad()) */

/* Los operadores lógicos hacen estructuras de controles más grande
    and = &&
    or */

function conjunciones() {
    let valor1 = true
    let valor2 = true

    if (valor1 && valor2) {
        console.log('El valor 1 y el valor 2 son verdadero');
    } else {
        console.log('Un valor es falso');
    }

}

conjunciones()

function disyuncion() {
    let valor1 = true
    let valor2 = false

    if (valor1 || valor2) {
        console.log('El operador OR es verdadero');
    } else {
        console.log('El operador OR es falso');
    }
}

disyuncion()

function negacion() {
    let valor1 = true

    if (!valor1) {
        console.log('El valor es ' + valor1);
    } else {
        console.log('El valor negado es ' + valor1);
    }
}

negacion()
