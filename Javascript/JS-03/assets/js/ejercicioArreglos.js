// Definicion de las cadenas
let cadenaOriginal = prompt('Ingresa la palabra a invertir')
let cadenaInvertida = []

// Recorriendo cadena original
for (let i = 0; i < cadenaOriginal.length; i++) {
    
    // Ingresando elemento de la cadena original a la cadena invertida
    cadenaInvertida.unshift(cadenaOriginal[i])
    
}

// Eliminando comas del arreglo y convirtiendolo en un String
console.log(String(cadenaInvertida).replaceAll(',', ''));