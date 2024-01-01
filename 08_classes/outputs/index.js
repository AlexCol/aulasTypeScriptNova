"use strict";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Classes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class User {
}
const alex = new User();
console.log(alex);
alex.name = "alexandre";
alex.age = 40;
console.log(alex);
//alex.job = "programmer";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Construtor
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newUser = new NewUser("Alexandre", 38);
console.log(newUser);
newUser.age = 40;
console.log(newUser);
//newUser.job = "programmer";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Campo Readonly
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
}
const fusca = new Vehicle("Fusca", 4);
const moto = new Vehicle("Honda", 2);
console.log(fusca);
fusca.name = "mudei de nome";
//fusca.wheels = 4; //não pode
console.log(moto);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Heracança e Super
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const myKillingMachine = new KillerMachine("Exterminator", 4);
console.log(trator);
console.log(myKillingMachine);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Metodos
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hey stranger!`);
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ O this em classes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão modelo ${this.model}, que tem ${this.hp} cavalos de potencia.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 550);
volvo.showDetails();
scania.showDetails();
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Getters
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const myPerson = new Person("Alexandre", "Coletti");
console.log(myPerson.fullName);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Setters
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Coords {
    set fillX(x) {
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
console.log(myCoords);
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blgPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `The title of the post is ${this.title}`;
    }
}
class Movie {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `The title of the movie is ${this.title}`;
    }
}
function ShowTitle(item) {
    console.log(item.itemTitle());
}
const newPost = new blgPost("Titulo do post");
const newMovie = new Movie("Titulo do filme");
ShowTitle(newPost);
ShowTitle(newMovie);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Override de Metodos
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("alguma coisa nova");
    }
}
const myObject = new Nova();
myObject.someMethod();
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Visibilidade Public
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class C {
    constructor() {
        this.x = 10; //por default, se não informar a visibilidade, ela é publica
    }
}
const cInstance = new C();
console.log(cInstance.x);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Visibilidade Protected
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class E {
    constructor() {
        this.x = 10;
    }
    ProtectedMethod() {
        console.log("Este metodo é protegido.");
    }
}
class F extends E {
    showX() {
        console.log(this.x);
    }
}
const myE = new E();
//myE.x;
const myF = new F();
//myF.x;
myF.showX();
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Visibilidade Private
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class PrivateClass {
    constructor() {
        this._name = "Private";
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const myPrivate = new PrivateClass();
//console.log(myPrivate._name);
console.log(myPrivate.name);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Static members
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class StaticMembers {
    static sum(n1, n2) {
        return n1 + n2;
    }
}
StaticMembers.propridade = "Teste Estatico";
console.log(StaticMembers.propridade);
var staticSum = StaticMembers.sum(1, 5);
console.log(staticSum);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Gerenic Class
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    showFirst() {
        return `${this.first} é o primeiro item.`;
    }
    showSecond() {
        return `${this.second} é o segundo item.`;
    }
}
var newItem = new Item("Item", "Surpresa");
console.log(newItem);
var newItem2 = new Item("Item", 2);
console.log(newItem2);
console.log(newItem2.showSecond());
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Param Properties
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class ParameterProperties {
    //com isso posso criar a propriedade e setar sua visibilidade no proprio construtor
    constructor(name, qtd, price) {
        this.name = name;
        this.qtd = qtd;
        this.price = price;
        this.name = name;
        this.qtd = qtd;
        this.price = price;
    }
    get Qtd() {
        return this.qtd;
    }
    get Price() {
        return this.price;
    }
}
const newShirt = new ParameterProperties("Shirt", 1, 19.99);
console.log(newShirt.name);
//console.log(newShirt.qtd);
console.log(newShirt.Qtd);
console.log(newShirt.Price);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Class Expression
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//não se cria a classe 'diretamente', se cria uma variavel e cria uma classe generica e joga ela na variavel
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("Alex");
console.log(person);
console.log(person.name);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Class Abstrata
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class AbstractClass {
}
//const newObj = new AbstractClass();
class AbstractExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`${this.name} é o nome informado.`);
    }
}
class AbstractExemple2 extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`${this.name} é o numero informado para o nome.`);
    }
}
const exm1 = new AbstractExemple("Alex");
const exm2 = new AbstractExemple2(38);
function useAbstractClass(obj) {
    obj.showName();
}
useAbstractClass(exm1);
useAbstractClass(exm2);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Relação entre classes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
/*
 ! type script não analisa o tipo da classe, por isso mesmo informando que precisa ser Dog na função
 ! ele aceita cat. O typescript olha APENAS o que DOG tem, e qualquer classe com essas propriedades
 ! é aceita. Como se fosse apenas uma interface.
 ! no exemplo abaixo, coloquei uma trativa caso deseje apenas do tipo DOG
*/
class Dog {
    constructor(name) {
        this.name = name;
    }
}
const doguinho = new Dog("Meu Dog");
function showDogDetails(dog) {
    /*
    if (!(dog instanceof Dog)) {
        console.log(`Animal informado não é um cachorro.`)
        return;
    }
    */
    console.log(`${dog.name} é o nome do meu dog.`);
}
showDogDetails(doguinho);
class Cat {
    constructor(name) {
        this.name = name;
    }
}
const mimi = new Cat("Mimi");
showDogDetails(mimi);
const meuDog2 = new Cat("Mimi2");
console.log(meuDog2);
