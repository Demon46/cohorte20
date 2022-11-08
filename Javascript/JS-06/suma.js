let num = document.querySelectorAll('.number')
let boton = document.getElementById('boton')
let container = document.getElementById('container')

boton.addEventListener('click', () => {

    let suma = 0

    num.forEach( elemento => suma += Number(elemento.value) )

    container.innerHTML = suma

})