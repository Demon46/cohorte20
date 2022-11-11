let boton = document.querySelector('#boton')
let mostrar = document.getElementById('mostrar') 
let h2 = document.querySelector('.h2')
let img = document.getElementById('img')

console.log(img);

boton.addEventListener('click', () => {

    h2.innerHTML = 'Saludos'

})

mostrar.addEventListener('click', () => {

    if (img.src != "./imgs/anime moon.jpg") {
    
        img.src = "./imgs/anime moon.jpg"

    }

})