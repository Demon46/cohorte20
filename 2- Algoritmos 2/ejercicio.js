
// Práctica de comparación de números

let num1 = Number(prompt('Ingresar el primer valor: '))
let num2 = Number(prompt('Ingresar el segundo valor: '))
let num3 = Number(prompt('Ingresar el tercer valor: '))

// 123, 132, 213, 231, 312, 321

if (num1 >= num2 && num2 >= num3) {
    console.log('Ordenados de mayor a menor ', num1, num2, num3); // 123
    console.log('Ordenados de menor a mayor ', num3, num2, num1);
} else if (num1 >= num2 && (num2 <= num3 && num1 >= num3)) {
    console.log('Ordenados de mayor a menor ', num1, num3, num2); // 132
    console.log('Ordenados de menor a mayor ', num2, num3, num1);
} else if (num1 <= num2 && num1 >= num3) {
    console.log('Ordenados de mayor a menor ', num2, num1, num3); // 213
    console.log('Ordenados de menor a mayor ', num3, num1, num2);
} else if (num1 <= num2 && (num2 >= num3 && num1 <= num3)) {
    console.log('Ordenados de mayor a menor ', num2, num3, num1); // 231
    console.log('Ordenados de menor a mayor ', num1, num3, num2);
} else if (num1 <= num3 && num1 >= num2) {
    console.log('Ordenados de mayor a menor ', num3, num1, num2); // 312
    console.log('Ordenados de menor a mayor ', num2, num1, num3);
} else /* if (num1 <= num3 && (num2 <= num3 && num1 <= num2)) */ {
    console.log('Ordenados de mayor a menor ', num3, num2, num1); // 321
    console.log('Ordenados de menor a mayor ', num1, num2, num3);
}

if ( num1 == num2 && num2 == num3) {
    console.log('Los tres números son iguales');
}



/* 

    Entradas: 
        4, 4, 2.
    Salida:
        4, 4, 2.
        2, 4, 4.
    Entradas: 
        4, 2, 4.
    Salida:
        4, 4, 2.
        2, 4, 4.
    Entradas: 
        2, 4, 4.
    Salida:
        4, 4, 2.
        2, 4, 4.

*/