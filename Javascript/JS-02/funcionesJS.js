
miNombre = 'Oscar Reyes Martínez'

function miFuncion(name) {

    let nombre = name

    console.log(nombre)

}

miFuncion(miNombre)

//************************

function funcion1() {

    let valor = 2

    valor = valor + 1

    return valor

}

console.log(funcion1());

//************************

let valor = 2

function funcion2(num = 3) {

    valor = valor + num

    console.log('El resultado es: ' + valor);

}

funcion2()

//************************

let variableGlobal = 5

function funcion3() {

    let variableLocal = 'El valor es: '

    console.log(variableLocal + variableGlobal);

}

funcion3()

//************************

function funcion4(valor = 10) {

    let numero = 6

    numero *= valor

    return numero

}

let res = funcion4()

console.log('El valor es ', res);

//************************
// Funciones Ánonimas

let funcion5 = function (parametro) {

    parametro *= 2

    return parametro
}

console.log('Llamando a la funcion anonima ', funcion5(4));

let palabra = 'Mañana'

let funcion6 = function (caracteres) {

    return 'Hola, la palabra ' + caracteres + ' tiene ' + caracteres.length + ' letras'

}

console.log(funcion6(palabra));

//************************
// Funciones Flecha

let suma = (x = 3, y = 5) => x + y

res = suma()

console.log(res);

/* 
Realizar una funcion (calcularPrecioTotal)
para Calcular el precio total de una compra tomando encuenta 
impuestos = 1.16, gartos de envio = 10, y como parametro el precio
donde precioTotal = (precio * impuesto ) + gartosEnvio; 

como salida precio Total
precioTotal = calcularPrecioTotal(23.34);
*/

const imp = 1.16
let env = 10
let prec = 3
let porc = 16


// Funcion Normal

function calcularPrecioTotal(precio = 0) {

    let precioTotal = (precio * imp) + env

    return precioTotal

}

console.log('Precio Total (Normal) = ', calcularPrecioTotal(prec));


// Funcion Anonima

let precioTotal1 = function (precio = 0) {

    let total = (precio * imp) + env

    return total

}

console.log('Precio Total (Anonima) = ', precioTotal1(prec));


// Funcion Flecha

let precioTotal2 = (precio = 0) => (precio * imp) + env

console.log('Precio Total (Flecha) = ', precioTotal2(prec));

/*
Para que el ejemplo anterior sea más completo, se puede añadir otro argumento
 a la función que indique el porcentaje de impuestos que se debe añadir al precio del producto. 
 Evidentemente, el nuevo argumento se debe añadir tanto a la definición de la función como a su llamada:

 let precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;

 calculaPrecioTotal(precio, porcentajeImpuestos)
*/

let precioTotal3 = (precio = 0, porcentaje = 0) => (precio * (1 + (porcentaje * .01))) + env

console.log('Precio Total con Impuestos (Flecha) = ', precioTotal3(prec, porc));



// Objetos

let miObjeto = {
    nombre: "Juan",
    edad: 30,
    datos: function () {

        let mensaje = 'Tu nombre es: ' + this.nombre

        mensaje += ' y tienes ' + this.edad + " años"

        console.log(mensaje);

    }
}

miObjeto.datos()

// Constructor de Objetos

let constructor = function (){
    objPersona = {
        nombre: "Juan",
        nss: 2357,
        datosPersona: function () {
            let msj = 'Eres ' + this.nombre + ' y tu número de seguro social es ' + this.nss
            console.log(msj)
        },
        otroMetodo: function (parametro) {
            let numero = 8
            console.log("La suma es: " + (numero + parametro));
        }
    }

    return objPersona

}

/*

Replicar la funcion de calcular precio total pero con objetos

Parametro: Precio
Atributos: Porcentaje, Gastos Envío 
Metodos: Calcular precio total

*/