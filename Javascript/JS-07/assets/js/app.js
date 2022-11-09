
let titulo = document.getElementById('titulo')
let p = document.getElementsByClassName('parrafo')
let padre = document.getElementById('padre')

console.log(titulo);
console.log(p);

titulo.textContent = 'Hola'
p[0].innerHTML = 'Soy un parrafo'

p[1].style.color = 'red'
p[1].style.backgroundColor = 'blue'

p[0].classList.add('coloresFeos')

// Crear elementos
const enlace = document.createElement("a")
enlace.href = "https://google.com"
enlace.textContent = "Google voy a tener suerte"

// Mover elementos
//document.body.insertAdjacentElement("afterbegin", enlace)

padre.appendChild(enlace)

console.log(enlace.textContent);