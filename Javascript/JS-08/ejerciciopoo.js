
class Persona {

    constructor(id, nombre, apellido, edad){

        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

    }

    getId(){

        return this.id

    }

    getNombre(){

        return this.nombre     

    }

    setNombre(nombre){

        this.nombre = nombre

    }

    getApellido(){

        return this.apellido     

    }

    setApellido(apellido){

        this.apellido = apellido

    }

    getEdad(){

        return this.edad     

    }

    setEdad(edad){

        this.edad = edad

    }

    toString(){

        return `${this.nombre} ${this.apellido}`

    }

}

class Empleado extends Persona{

    constructor(id, nombre, apellido, edad, idEmp, sueldo){

        super(id, nombre, apellido, edad)
        this.idEmp = idEmp
        this.sueldo = sueldo

    }

    getIdEmp(){

        return this.idEmp = this.idEmp

    }

    getSueldo(){

        return this.sueldo = sueldo

    }

    setSueldo(sueldo){

        this.sueldo = sueldo

    }

    toString(){

        return `El empleado ${super.toString()} con el id: ${this.idEmp} gana ${this.sueldo}`

    }

}

class Cliente extends Persona{

    constructor(nombre, apellido, idCli, fecReg){

        super(nombre, apellido)
        this.idCli = idCli
        this.fecReg = fecReg

    }

    getIdCli(){

        return this.idCli = idCli

    }

    getFecReg(){

        return this.fecReg = fecReg

    }

    setFecReg(fecReg){

        this.fecReg = fecReg

    }

    toString(){

        return `El cliente ${super.toString()} con el id: ${this.idCli} realizo una compra el ${this.fecReg}`

    }

}

let pers1 = new Persona(1, 'Oscar', 'Reyes', 27)

console.log(pers1.toString());

let emp1 = new Empleado(1, 'Jonathan', 'Ramirez', 25, 34827410, 30000)

console.log(emp1.toString());

let cli1 = new Cliente('Erick', 'Cepeda', 123, '12/12/2015')

console.log(cli1.toString());