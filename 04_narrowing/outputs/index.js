"use strict";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ typeof Type Guard (lógica de tratamento de casos quando as variaveis podem vir de mais de um jeito)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function sum(n1, n2) {
    if (typeof (n1) === "string" && typeof (n2) === "string") {
        return (Number.parseFloat(n1) + Number.parseFloat(n2)).toString();
    }
    if (typeof (n1) === "number" && typeof (n2) === "number") {
        return (n1 + n2);
    }
    return "Impossivel realizar soma";
}
let resposta;
resposta = sum(1.5, 2);
console.log(resposta);
console.log(typeof (resposta));
resposta = sum("1.5", "3");
console.log(resposta);
console.log(typeof (resposta));
resposta = sum(1.5, "3");
console.log(resposta);
console.log(typeof (resposta));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ checagem de valor
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            console.log(arr.reduce((i, total) => i + total));
        }
        else if (operation === "mult") {
            console.log(arr.reduce((i, total) => i * total));
        }
    }
    else {
        console.log("Por favor, defina uma operacão.");
    }
}
operations([1, 2, 3]);
operations([1, 2, 4], "sum");
operations([1, 2, 4], "mult");
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ instanceof
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser {
    constructor(name) {
        this.name = name;
    }
}
const john = new User("john");
const paul = new SuperUser("paul");
console.log(john);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
    else {
        console.log('acesso indevido');
    }
}
userGreeting(john);
userGreeting(paul);
userGreeting({ name: "alex" });
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ operador in
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
        ;
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if (!(dog instanceof Dog)) {
        console.log(`Animal informado não é um cachorro.`);
        return;
    }
    if (dog.breed) {
        console.log(`${dog.name} é da raça ${dog.breed}`);
    }
    else {
        console.log(`${dog.name} não tem raça definida.`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
class Cat {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
        ;
    }
}
const mimi = new Cat("Mimi");
showDogDetails(mimi);
