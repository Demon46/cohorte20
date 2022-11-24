
let matriz1 = [[2, 5, 6], [5, 9, 7], [6, 4, 3]]
let matriz2 = [[5, 3, 2], [8, 5, 4], [1, 4, 9]]
let newArr = []

// Normal
/*for (let i = 0; i < matriz1.length; i++) {
    
    for (let j = 0; j < matriz2.length; j++) {

        newArr[i][j] = (matriz1[i][j] * matriz2[i][j])
        
    }
    
}*/

console.table(newArr)

// Gauss-Jordan
for (let i = 0; i < matriz1.length; i++) {

    newArr[i] = []

    for (let j = 0; j < matriz2.length; j++) {

        let aux = 0

        for (let k = 0; k < matriz1[0].length; k++) {

            console.log(i, j, k);

            console.log(matriz1[i][k], matriz2[k][j]);

            aux += (matriz1[i][k] * matriz2[k][j] )

            console.log(aux);
            console.log('******************************');

        }

        console.log(aux);
        console.log('+++++');

        newArr[i][j] = aux

    }

}

console.table(matriz1);
console.table(matriz2);

console.table(newArr);