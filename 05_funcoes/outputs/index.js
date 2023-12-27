"use strict";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ função sem retorno
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function withoutReturn() {
    console.log("Função sem retorno");
    //return 1; //se preenchido o ':void', qualquer return com valor apresentará erro
}
withoutReturn();
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ callback como argumento
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, nomeUsuario) {
    console.log("Preparando a função.");
    const greet = f(nomeUsuario);
    console.log(greet);
}
preGreeting(greeting, "Alex");
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ generic function
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjs(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObj = mergeObjs({ name: "Alexandre" }, { age: 38, job: "Programer" });
console.log(newObj);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ constraint
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 6));
console.log(biggestNumber("7", "6"));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ especificar tipo de argumento
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
let meuArray = mergeArrays([1, 2, 3], ["a", "oi"]);
//meuArray = mergeArrays([1, 2, 3], ["a", "oi"]);
console.log(meuArray);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ parametro opcional
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function modernGreeting(nome, greet) {
    let retorno;
    if (greet) {
        retorno = `Olá ${greet}. ${nome}.`;
    }
    else {
        retorno = `Olá ${nome}.`;
    }
    return retorno;
}
console.log(modernGreeting("Alexandre"));
console.log(modernGreeting("Alexandre", "Sr"));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ valor default
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function somaDefault(n1, n2 = 10) {
    return n1 + n2;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 20));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo unknown
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function doSomething(x, y) {
    if (typeof x === "number" && typeof y === "number")
        console.log(x + y);
    else if (typeof x !== "string" || typeof y !== "string")
        console.log("Um dos valores não é numerico.");
}
doSomething(1, 2);
doSomething(1, "2");
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo never
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Oi");
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Rest Operator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function sumAll(...valores) {
    return valores.reduce((valor, total) => valor + total);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ destructuring
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 50 };
console.log(showProductDetails(shirt));
//console.log(showProductDetails({name: "pessoa", age: 30}));
