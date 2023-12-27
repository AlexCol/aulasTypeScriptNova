/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ de tipo para interface
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface IProduct {
    name: string
    price: number
    isAvailable: boolean
}
function showProductDetails (prod: IProduct) {
    let msg:string = `O nome do produto é ${prod.name}, seu preco é R$${prod.price}. `;
    msg += (prod.isAvailable) ? `E ele se encontra disponível.` : `Mas infelizmente ele se incontra indisponivel.`;
    console.log(msg);
}
const shirt:IProduct = {
    name: "Camisa",
    price: 45.99,
    isAvailable: true
}
showProductDetails(shirt);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ interface com propriedade opcional
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface IUser {
    email: string
    role?: string
}
function showUserDetails (user: IUser) {
    let msg:string = `O email do usuário é ${user.email}.`;
    if (user.role) {
        msg += ` E sua função é ${user.role}.`
    };
    console.log(msg);
}
const user1:IUser = {
    email: "emailDele",
    role: "programador"
}
const user2:IUser = {
    email: "emailDele2"
}
showUserDetails(user1);
showUserDetails(user2);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ propriedades readonly
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface ICar {
    brand: string,
    readonly wheels: number
}
const fusca:ICar = {
    brand: "vw",
    wheels: 4
}
console.log(fusca);
//fusca.wheels = 3;

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ index signature
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface ICoord {
    [index: string]: number
}
let coords: ICoord = {
    x: 5
}
coords.y = 6;
coords.z = 9;
console.log(coords);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ herança de interfaces
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface IHuman {
    name: string,
    age: number
}
interface ISuperHuman extends IHuman {
    superpowers: string[]
}

const alex: IHuman = {
    name: "Alex",
    age: 38
}
console.log(alex);

const bernard: ISuperHuman = {
    name: "Bernard",
    age: 38,
    superpowers: ["fly", "superStrength", "Invulnerability"]

}
console.log(bernard);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ intersection types
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface Character {
    name: string
}
interface Gun {
    gunType: string,
    caliber: number
}

type characterWithGun = Character & Gun;
const arnold: characterWithGun = {
    name: "arnold",
    gunType: "pistol",
    caliber: 45
}
console.log(arnold);
console.log(arnold["gunType"]);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ readonly array
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let myArray:ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
//myArray[3] = "Pessego";
// myArray[4] = "Mamão";
console.log(myArray);

myArray.forEach((item, index) => {
    console.log(`A fruta na posição ${index} é ${item}`);
});
const retornoMap = myArray.map((item, index) => {
    return `A fruta na posição ${index} é ${item}`
});
console.log(retornoMap);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tuplas
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type fiveNumbers = [number, number, number, number, number];
const myFiveNumbers:fiveNumbers = [1, 2, 3, 4, 5];
//const mySixNumbers:fiveNumbers = [1, 2, 3, 4, 5, 6];
//const mixArray: fiveNumbers = [1, "teste", 3, 4, 5];
console.log(myFiveNumbers);

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ["Alex", 38];
console.log(anotherUser);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tuplas com readonly
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type readOnly = readonly [number, number];
let myReadOnlyType: readOnly = [1, 2];
console.log(myReadOnlyType);
//myReadOnlyType[1] = 3;
myReadOnlyType = [3, 4];
console.log(myReadOnlyType);