let h2 = document.getElementById('h2')
let btn = document.getElementById('btn')
let nam = document.getElementById('name')
let last = document.getElementById('last')

btn.addEventListener('click', () => {

    h2.innerHTML = nam.value + ' <br> ' + last.value

})

/*

function mostrarValores(){
    
    let formulario = document.forms['formulario]
    let texto = ' '
    for(let elemento of formulario){
        texto += elemento.value + '<br>'
    }

    document.getElementById('valores').innerHTML = text0

}

*/