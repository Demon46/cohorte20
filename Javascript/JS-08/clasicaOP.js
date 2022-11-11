
class Operaciones{

    numero1 = 0
    numero2 = 0

    constructor(valor1, valor2){

        this.numero1 = valor1
        this.numero2 = valor2 

    }

    sumar(a, b) {
        return a + b
    }

    set numero1(num1){

        this.numero1 = num1

    }

    set numero2(num2){

        this.numero2 = num2

    }

    get numero1(){

        return this.numero1

    }

    get numero2(){

        return this.numero2

    }

}

let obj1 = new Operaciones(8,6)

console.log(obj1.numero1);
console.log(obj1.numero2);

console.log('obj1 : ', obj1.sumar(obj1.numero1, obj1.numero2));

let obj2 = new Operaciones()

obj2.numero1 = 8
obj2.numero2 = 54

console.log(obj2.numero1);
console.log(obj2.numero2);
console.log(obj2.sumar(obj2.numero1, obj2.numero2));