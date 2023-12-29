/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ generics
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showData<T>(arg: T): string {
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
function showProductName<T extends {name: string}>(obj: T) {
    console.log(`O nome do produto é ${obj.name}`);
}
const prd = {name: "Fone", preco: 49.99};
showProductName(prd);
const prd2 = {name: "Carro", wheels: 4};
showProductName(prd2);
const prd3 = {cor: "branco", wheels: 4};
//showProductName(prd3);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ interface em generics
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface MyObj<T, U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObj<number, number, string>;
const myCar:Car = {
    name: "Fusca",
    wheels: 4, //setado como number na criação do tipo
    engine: 1, //setado como number na criação do tipo
    color: "Red", //setado como number na criação do tipo
}
console.log(myCar);

type Pen = MyObj<boolean, boolean, string>;
const myPen:Pen = {
    name: "Caneta",
    wheels: false, //setado como number na criação do tipo
    engine: false, //setado como number na criação do tipo
    color: "Blue", //setado como number na criação do tipo
}
console.log(myPen);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ type parameters
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
}
console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(server, 'teste'));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ keyof type operators
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type Character = {name: string, age: number, hasDriveLicense: boolean};

type c = keyof Character;

const myChar: Character = {
    name: "Alex",
    age: 38,
    hasDriveLicense: true
};

function showCharName(obj: Character, key: c) : string {
    return `O dado é ${obj[key]}`;
}

console.log(showCharName(myChar, "name"));

//************************************************** meus testes na sessao
type Operacoes = {
    soma: (n1: number, n2: number) => number, 
    subtracao: (n1: number, n2: number) => number, 
    multiplicacao: (n1: number, n2: number) => number, 
    divisao: (n1: number, n2: number) => number
};
type op = keyof Operacoes;

const minhasOperacoes: Operacoes = {
    soma: function (n1: number, n2: number): number {
        return n1+n2;
    },
    subtracao: function (n1: number, n2: number): number {
        return n1-n2;
    },
    multiplicacao: function (n1: number, n2: number): number {
        return n1*n2;
    },
    divisao: function (n1: number, n2: number): number {
        return n1/n2;
    }
}

function calcula(operacoes: Operacoes, ope: op, n1: number, n2: number) {    
    console.log(operacoes[ope](n1, n2));
}
calcula(minhasOperacoes, "soma", 1, 2);
//calcula(minhasOperacoes, "somaa");
calcula(minhasOperacoes, "subtracao", 1, 2);

let testeSeEhParam: string;
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
const userName: string = "Alex";
let userName2: typeof userName;
userName2 = "Bernard";
//userName2 = 1;

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Indexed access operators
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type Truck = {km: number, kg: number, description: string};
type Km = Truck["km"];

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Meeeeeeuuu caminhãoooo"
}

function showKM(km:Km) {
    return `A kilometragem é de ${km}`;
}

console.log(showKM(newTruck.km));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Conditional types
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface A {name: string}
interface B extends A {age: number}

type myType = B extends A ? number : string;
const someVar: myType = 1;

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ template literal types
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type testeA = "text";
type CustomType = `meu tipo é ${testeA}`;
const testing: CustomType = "meu tipo é text";

type a1 = "Testando";
type a2 = "Union";
type a3 = a1 | a2;
const t30: a3 = "Testando";
const t31: a3 = "Union";
//const t32: a3 = "Union2";