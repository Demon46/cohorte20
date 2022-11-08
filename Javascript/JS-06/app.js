let etiqueta = document.getElementById('etiqueta')
let parrafo = document.getElementById('parrafo')
let otro = document.getElementById('otro')
let btn = document.getElementById('btn')

console.log(parrafo);
console.log(etiqueta.innerHTML);

parrafo.innerText = 'Hola mundo'

let parrafos = document.getElementsByTagName('p')

for (let i = 0; i < parrafos.length; i++) {
    
    console.log(`Parrafo ${i}: ${parrafos[i].innerHTML}`);
    
}

for (const elemento of parrafos) {
    
    console.log(`Parrafo: ${elemento.innerHTML}`);

}

btn.addEventListener('click', () => {
    
    etiqueta.classList.add('azul')
    etiqueta.classList.add('border')
    etiqueta.classList.add('bg-gy')

    setTimeout(() => {
        
        etiqueta.classList.remove('azul')
        etiqueta.classList.remove('bg-gy')

    }, 1000);

    setTimeout(() => {
        
        etiqueta.classList.remove('border')

    }, 3000);

})