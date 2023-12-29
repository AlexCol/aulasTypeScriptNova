"use strict";
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ generics
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["testando generic", "oi"]));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ constraints em generics
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showProductName(obj) {
    console.log(`O nome do produto é ${obj.name}`);
}
const prd = { name: "Fone", preco: 49.99 };
showProductName(prd);
const prd2 = { name: "Carro", wheels: 4 };
showProductName(prd2);
const prd3 = { cor: "branco", wheels: 4 };
const myCar = {
    name: "Fusca",
    wheels: 4, //setado como number na criação do tipo
    engine: 1, //setado como number na criação do tipo
    color: "Red", //setado como number na criação do tipo
};
console.log(myCar);
const myPen = {
    name: "Caneta",
    wheels: false, //setado como number na criação do tipo
    engine: false, //setado como number na criação do tipo
    color: "Blue", //setado como number na criação do tipo
};
console.log(myPen);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ type parameters
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
const myChar = {
    name: "Alex",
    age: 38,
    hasDriveLicense: true
};
function showCharName(obj, key) {
    return `O dado é ${obj[key]}`;
}
console.log(showCharName(myChar, "name"));
const minhasOperacoes = {
    soma: function (n1, n2) {
        return n1 + n2;
    },
    subtracao: function (n1, n2) {
        return n1 - n2;
    },
    multiplicacao: function (n1, n2) {
        return n1 * n2;
    },
    divisao: function (n1, n2) {
        return n1 / n2;
    }
};
function calcula(operacoes, ope, n1, n2) {
    console.log(operacoes[ope](n1, n2));
}
calcula(minhasOperacoes, "soma", 1, 2);
//calcula(minhasOperacoes, "somaa");
calcula(minhasOperacoes, "subtracao", 1, 2);
let testeSeEhParam;
testeSeEhParam = "soma";
console.log(testeSeEhParam in minhasOperacoes);
testeSeEhParam = "soma2";
console.log(testeSeEhParam in minhasOperacoes);
//************************************************** meus testes na sessao
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ typeof type operators
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
const userName = "Alex";
let userName2;
userName2 = "Bernard";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Meeeeeeuuu caminhãoooo"
};
function showKM(km) {
    return `A kilometragem é de ${km}`;
}
console.log(showKM(newTruck.km));
const someVar = 1;
const testing = "meu tipo é text";
const t30 = "Testando";
const t31 = "Union";
//const t32: a3 = "Union2";
