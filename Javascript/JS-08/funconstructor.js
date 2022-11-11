
let constructor = function (){

    let valor1 = 0;
    let valor2 = 0;

    let persona = {

        nombre: 'Pedro',
        apellido: 'Lara',
        suma: function (num1, num2) {
            return num1 + num2
        },
        get Nombre(){
            return this.nombre
        },
        set Nombre(nombre1){
            return this.nombre = nombre1
        }

    }

    return persona

}

let persona1 = constructor('Oscar', 'Reyes', (12, 3))

persona1.nombre = 'Raul'

console.log(persona1.nombre);