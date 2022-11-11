
class Persona{

    constructor(nombre, apellido){

        this.nombre = nombre
        this.apellido = apellido

    }

    nombreCompleto(){

        return `${this.nombre} ${this.apellido}`

    }

    toString(){

        return this.nombreCompleto().toString()

    }

}

class Empleado extends Persona{

    constructor(nombre, apellido, empresa, departamento, id, salario){

        super(nombre, apellido)
        this.empresa = empresa
        this.departamento = departamento
        this.id = id
        this.salario = salario

    }

    infoEmpleado(){

        return `El empleado ${super.nombreCompleto()} con el identificador ${this.id} trabaja en ${this.empresa}, en el departamento de ${this.departamento} y tiene un sueldo de ${this.salario}`

    }

}

let pers1 = new Persona('Oscar', 'Reyes')
let emp1 = new Empleado('Oscar', 'Reyes', 'Google', 'Desarrollo', 1234, 30000)


console.log(pers1.nombreCompleto());
console.log(emp1.infoEmpleado());
console.log(pers1.toString());