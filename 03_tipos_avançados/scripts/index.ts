/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ arrays
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let numbers: number[] = [1, 2, 3];
console.log(numbers);
numbers.push(5);
console.log(numbers);
console.log(numbers[0]);

let numeros : Array<number> = new Array(); //!ou 'let numeros : Array<number> = [1, 2]' se já quiser ela iniciada
numeros.push(6);
console.log(numeros);

let mix1 : (string|number)[] = ['teste', 1];
let mix2 : Array<string|number> = [2, 'teste2'];
console.log(mix1);
console.log(mix2);


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo any
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let minhaVar : any;
minhaVar = 'a';
console.log(minhaVar);
minhaVar = 1;
console.log(minhaVar);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo de dado em declaração de função
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function soma(a: number, b: number) {
    return a + b;
}
console.log(soma(5, 6));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo de dado em retorno de função
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function greeting(nome: string):string {
    if (nome) {
        return `Olá ${nome}.`
    } else {
        return "Qual o seu nome?";
    }
}
console.log(greeting("Alexandre"));
console.log(greeting(""));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ função anomina
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
var funcSoma = function(n1: number, n2:number):number { return n1+n2; }
console.log(funcSoma(1, 2));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ objetos
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function passCoordinates(coord: {x: number, y: number}) {
    console.log(`X coordinate: ${coord.x}`)
    console.log(`Y coordinate: ${coord.y}`)
}
const meuObj = {x: 1, y: 2};
passCoordinates(meuObj);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ propriedades opcionais e validação
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
var showNumbers = (a?: number, b?: number, c?: number) => {
    if (a) console.log(`A: ${a}`);
    if (b) console.log(`B: ${b}`);
    if (c) console.log(`C: ${c}`);
    if (!(a||b||c)) console.log(`no number`);
};
showNumbers(1, 2, 3);
showNumbers(4, 5);
showNumbers(1);
showNumbers();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ union type
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let minhaVarUnion: (string|number|boolean);
minhaVarUnion = "oi";
console.log(minhaVarUnion);
minhaVarUnion = 1;
console.log(minhaVarUnion);
minhaVarUnion = true;
console.log(minhaVarUnion);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ type alias
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type ID = string|number;
function showId(id: ID) {
    console.log(`O Id é: ${id}`);
}
showId(123);
showId('a140');

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ rest param
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function somaVarios(...valores: number[]):number {
    let soma:number;
    soma = valores.reduce((total:number, atual:number) => total + atual);
    return soma;
}
console.log("Somando com dois:", somaVarios(5, 8));
console.log("Somando com vários:", somaVarios(5, 8, 5, 2, 3, 4, 5, 6, 7, 8, 8, 6, 3, 2, 5, 7, 8, 7));


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ interface
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface Point {
    x: number, 
    y: number,
    z: number
};
function showCoords(p: Point) {
    console.log(`X: ${p.x}`);
    console.log(`Y: ${p.y}`);
    console.log(`Z: ${p.x}`);    
}

let coordObj:Point = {
    x: 1,
    y: 2,
    z: 3
}

showCoords(coordObj);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ interface x type alias
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface IPerson {
    name: string
}
interface IPerson {
    age: number
}
let Person: IPerson = {
    name: "Alexandre",
    age: 38
}

type personType = {
    name: string
};
/*
 ! não deixa declarar dois 'types' iguais como permite com interfaces
type personType {
    age: number
}
*/
let Person2: personType = {
    name: "Alexandre"
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ literal types
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let literal1: "testando";
//! nao funciona: literal1 = "oi";

function showDirections(direction: "left"|"right"|"center") {
    console.log(`Selected directions is ${direction}`);
}
showDirections("left");
//! não aceita: showDirections("top");

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Nom null assertion
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
const p = document.getElementById("some-p");
console.log(p!.innerText);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ BigInt
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let n: bigint;
n = 1000n;
console.log(n + 100n);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Symbol
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let symbolA = Symbol("a");






/*
const minhasFuncoes = {
    minhaSoma: funcSoma
};
console.log(minhasFuncoes['minhaSoma'](11, 2));
console.log(typeof(minhasFuncoes));
*/