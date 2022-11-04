let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 'Mañana']

console.log(arr[1][1]);

let suba = [0, ...arr, 10, 11, 12]

console.log(suba);

for (let i = 0; i < arr.length; i++) {

    document.write(`<p style="text-align: center;">Este es un elemento de la matriz <strong>arr</strong></p>`)

    if (Array.isArray(arr[i])) {

        for (let j = 0; j < arr[i].length; j++) {

            document.write(`<p style="text-align: center;"><br> Estás en la posicion [${i}][${j}] del arreglo y el valor que tiene esa posicion es <strong>${ arr[i][j] }</strong><br></p>`);
            
        }
        
    } else {
        
        document.write(`<p style="text-align: center;"> ${arr[i]}</p>`);

    }

    document.write('<p style="text-align: center;"><br>**************************************************************************<br></p>');

}

//************************************* */
// While

let cont = 0

while (cont <= 10) {
    
    console.log(cont);

    cont++

}

// Do While

do{

    console.log(cont);

    cont++

}while(cont <= 10)

// Do + For

let fila = 0

do {
    
    for (let columna = 0; columna <= 2; columna++) {
    
        console.log(arr[fila][columna]);
    
    }
    
    fila++
    
    console.log('-------------');

} while (fila <= 0);