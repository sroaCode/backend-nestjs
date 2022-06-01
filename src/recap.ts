const myName = 'Sebas';
const myAge = 25;
const suma = (numero1:number, numero2:number) => {
    return numero1 + numero2;
}

suma(12,12);

class Person {
    /* Forma tradicional de inicializar variables con un contructor

    private age;
    private name;

    constructor(age:number, name:string){
        this.age = age;
        this.name = name;
    }
    */

    //Forma NestJS
    constructor(private age:number, private name:string){}

    getSummary(){
        return `my name is ${this.name}, and my age is ${this.age}`;
    }
}

const sebas = new Person(25,'Sebas');
sebas.getSummary();