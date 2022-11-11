
/*let persona = {

        nombre: "Oscar",
        apellido: "Reyes",
        edad: 27,
        casado: false,
        nombreCompleto: function() {

            return this.nombre + " \n " + this.apellido

        }

}

console.log(persona.nombreCompleto());

let persona1 = new persona("Jonathan", "Ramirez", 25, false)
console.log(persona1);*/

// Clase persona
class Persona {

    // Constructor toma parametros para construir los atributos
    constructor(nombre, apellido, edad, casado){

        // This.algo hace referencia a la variable y el valor después del '=' hace referencia al parametro
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.casado = casado;

    }

    // Metodos
    nombreCompleto(){

        return `${this.nombre} ${this.apellido}` 

    }

    despertar(){

        return `Estoy despierto`

    }

    dormir(){

        return `ZZZzzz`

    }

}

let persona1 = new Persona('Oscar', 'Reyes', 27, false)

console.log(persona1);

// Crear un arreglo mediante un objeto
let personaArreglo = Object.values(persona1)

console.log(personaArreglo);

// Convertir un objeto a JSON
let personaString = JSON.stringify(persona1)

console.log(personaString);

// Agregando un atributo al objeto
persona1.tel = 5555555555

// Objeto Profesor hereda atributos y metodos de Persona
class Profesor extends Persona {

    constructor(nombre, apellido, edad, casado, salario, antiguedad, horario){

        super(nombre, apellido, edad, casado)
        this.salario = salario
        this.antiguedad = antiguedad
        this.horario = horario

    }

    darClases(){

        return `El profesor ${super.nombreCompleto()} da clases en el horario ${this.horario}`

    }

}

let victor = new Profesor('Victor', 'Hugo', 43, true, 30000, 2018, 'Matutino')

console.log(victor.darClases());



class Estudiante extends Persona{

    constructor(nombre, apellido, edad, boleta){

        super(nombre, apellido, edad)
        this.boleta = boleta

    }

    dameBoleta(){

        return `${super.nombreCompleto()} tiene la boleta ${this.boleta}`

    }

}

let oscar = new Estudiante('Oscar', 'Reyes', 27, '20155G0017')

console.log(oscar.dameBoleta());