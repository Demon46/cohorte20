/*const foo = () => console.log('First');
const bar = () => setTimeout(() => {
    console.log('Second');
}, 2000);
const vae = () => console.log('Third'); 

bar()
foo()
vae()*/

// Consumir API mediante Promises
const nombre = () => {

    const nombres = ['Pepe', 'Pancho', 'Maria']

    /*setTimeout(() => {
        
        return nombres

    }, 3000);*/

    return new Promise((resolve, reject) => {

        setTimeout(() => {
           
            if (true) {
                
                resolve(nombres)

            } else {
                
                reject('No hay nombres')

            }

        }, 3000);

    })

}

/*nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error))

console.log(nombre());*/

// Consumir API mediante Async -- Await

const obtenerNombre = async () => {

    try{

        let nombres = await nombre()
        console.log(nombres);

    } catch (error) {

        console.error(error);

    }


}

//obtenerNombre()



// PokeApi 

/*const url = 'https://pokeapi.co/api/v2/pokemon/405'

const pokedex = () => {

    fetch(url)
        .then((datos) => datos.json())
        .then((pokemon) => {

            console.log(pokemon);

        })
        .catch(error => console.log(error))

}

pokedex()*/



// PokeApi con Async Await

const pokecard = document.getElementById('pokemon')
const pokename = document.getElementById('nombre')
const pokeimg = document.getElementById('img')
const form = document.getElementById('form')

const pokedex = async (numero) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`

    try {
        
        const respuesta = await fetch(url)
        const pokemon = await respuesta.json()
        //console.log(respuesta); // Te manda informacion sobre el servidor
        console.log(pokemon); // Te manda información sobre los datos (Pokemon)

        const datos = {

            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default

        }
        
        pokename.textContent = pokemon.name
        pokeimg.innerHTML = `<img src="${datos.imagen}" alt="${datos.nombre}" height="200">`

    } catch (error) {

        console.error(error);
        
    }

}

form.addEventListener('submit', (evento) => {

    evento.preventDefault()

    const valor = document.getElementById('idP').value

    pokedex(valor)

    form.reset()

})