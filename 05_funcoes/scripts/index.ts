/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ função sem retorno
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function withoutReturn():void {
    console.log("Função sem retorno");
    //return 1; //se preenchido o ':void', qualquer return com valor apresentará erro
}
withoutReturn();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ callback como argumento
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function greeting(name: string):string {
    return `Olá ${name}`;
}

function preGreeting(f: (name:string) => string, nomeUsuario:string) {
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
function firstElement<T>(arr: T[]): T {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjs<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObj = mergeObjs({name: "Alexandre"}, {age: 38, job:"Programer"});
console.log(newObj);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ constraint
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function biggestNumber<T extends (number | string)>(a: T, b: T): T {
    let biggest : T;

    if (+a > +b) {
        biggest = a;
    } else {
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
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

let meuArray = mergeArrays<string|number>([1, 2, 3], ["a", "oi"]);
//meuArray = mergeArrays([1, 2, 3], ["a", "oi"]);
console.log(meuArray);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ parametro opcional
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function modernGreeting(nome: string, greet?: string) : string {
    let retorno: string;
    if (greet) {
        retorno = `Olá ${greet}. ${nome}.`
    } else {
        retorno = `Olá ${nome}.`
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
function somaDefault(n1: number, n2:number = 10): number {
    return n1 + n2;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 20));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tipo unknown
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function doSomething(x:unknown, y: unknown) {
    if (typeof x === "number" && typeof y === "number")
        console.log(x+y);
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
function showErrorMessage(msg: string): never {
    throw new Error(msg);    
}
//showErrorMessage("Oi");

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Rest Operator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function sumAll(...valores: number[]) : number {
    return valores.reduce((valor, total) => valor + total);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ destructuring
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showProductDetails({name, price}: {name:string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = {name: "Camisa", price: 50};
console.log(showProductDetails(shirt));
//console.log(showProductDetails({name: "pessoa", age: 30}));