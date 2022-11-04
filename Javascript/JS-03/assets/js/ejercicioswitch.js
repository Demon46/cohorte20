/* 
Escribir un programa que detecte el cupón que tiene el usuario
Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%
-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado

*/

/*

let precio = Number(prompt('Introduce precio: '))
let pOriginal
let pDescuento
let cupon = prompt('Ingresa el cupon: \n - Bronce \n - Plata \n - Oro \n - Platino')

cupon = cupon.toLowerCase()

if( (isNaN(precio) = true) && (precio <= 0)){

    document.write('Lo siento, no es un precio valido')

} else {

    switch(cupon) {

        case 'bronce':
    
            pOriginal = precio
            pDescuento = precio * .95
    
            document.write('El precio original es: ' + pOriginal + ' y el precio con el descuento es: ' + pDescuento);
    
        break;
    
        case 'plata':
    
            pOriginal = precio
            pDescuento = precio * .90
    
            document.write('El precio original es: ' + pOriginal + ' y el precio con el descuento es: ' + pDescuento);
    
        break;
    
        case 'oro':
    
            pOriginal = precio
            pDescuento = precio * .80
    
            document.write('El precio original es: ' + pOriginal + ' y el precio con el descuento es: ' + pDescuento);
    
        break;
    
        case 'platino':
    
            pOriginal = precio
            pDescuento = precio * .75
    
            document.write('El precio original es: ' + pOriginal + ' y el precio con el descuento es: ' + pDescuento);
    
        break;
    
        default:
    
        document.write('Cupón no válido. Intentalo de nuevo')
    
        break;
    
    }

}

*/

// ***************************

let nombre = 'Raul'

console.log('Hola yo soy ' + nombre);
console.log('Hola');
console.log(`Hola yo soy ${nombre} y mi edad es ${2022-1995}`);

/************************ */
// Operador ternario

let edad = 15

let mensaje = edad >= 18 
? 'Es mayor de edad'
: 'Tas chiquito'

console.log(mensaje);

console.log(`Yo soy Raul y soy ${edad >= 18 ? 'mayor de edad' : 'menor de edad'}`);