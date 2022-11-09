
const boton = document.getElementById('boton')

// 1. Seleccionar el contenedor
const cont = document.getElementsByClassName('contenedor')

console.log(cont[0]);

// 2. Crear elemento imagen
const nvaImg = document.createElement("img")

// 3. Ingresar atributos a la imagen
nvaImg.src = "http://placeimg.com/200/200/nature"
nvaImg.alt = "Imagen"

console.log(nvaImg);

// 4. Colocar la imagen dentro del contenedor
cont[0].appendChild(nvaImg)


/* 
    Forma alternativa de crear elementos
*/

// 1 Llamar al elemento padre
const nvaImg2 = document.getElementById('img')

// 2 Acceder al contenido
nvaImg2.innerHTML += `<img src="http://placeimg.com/200/200/animals" alt="Imagen2"><br>`


// Crear lista a partir de los elementos guardados en un arreglo

const nombres = ["Pedro", "Juan", "Sonia", "Miguel"]
const arreglo = document.getElementById('arreglo')
const ul = document.createElement("ul")

arreglo.appendChild(ul)

boton.addEventListener('click', () => {

    for (let i = 0; i < nombres.length; i++) {
    
        ul.innerHTML += `<li>${nombres[i]}</li>`    
    
    }    

    setTimeout(() => {
        
        ul.innerHTML = ''

    }, 3000);

})

//Forma 2
const frutas = ['Manzana', 'Limon', 'Pera', 'Uva']
const lista2 = document.getElementById('lista2')

frutas.forEach(el => {

    lista2.innerHTML += `<li>${el}</li>`

})