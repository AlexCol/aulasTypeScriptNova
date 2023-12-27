"use strict";
function showProductDetails(prod) {
    let msg = `O nome do produto é ${prod.name}, seu preco é R$${prod.price}. `;
    msg += (prod.isAvailable) ? `E ele se encontra disponível.` : `Mas infelizmente ele se incontra indisponivel.`;
    console.log(msg);
}
const shirt = {
    name: "Camisa",
    price: 45.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    let msg = `O email do usuário é ${user.email}.`;
    if (user.role) {
        msg += ` E sua função é ${user.role}.`;
    }
    ;
    console.log(msg);
}
const user1 = {
    email: "emailDele",
    role: "programador"
};
const user2 = {
    email: "emailDele2"
};
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    brand: "vw",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 5
};
coords.y = 6;
coords.z = 9;
console.log(coords);
const alex = {
    name: "Alex",
    age: 38
};
console.log(alex);
const bernard = {
    name: "Bernard",
    age: 38,
    superpowers: ["fly", "superStrength", "Invulnerability"]
};
console.log(bernard);
const arnold = {
    name: "arnold",
    gunType: "pistol",
    caliber: 45
};
console.log(arnold);
console.log(arnold["gunType"]);
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ readonly array
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
//myArray[3] = "Pessego";
// myArray[4] = "Mamão";
console.log(myArray);
myArray.forEach((item, index) => {
    console.log(`A fruta na posição ${index} é ${item}`);
});
const retornoMap = myArray.map((item, index) => {
    return `A fruta na posição ${index} é ${item}`;
});
console.log(retornoMap);
const myFiveNumbers = [1, 2, 3, 4, 5];
//const mySixNumbers:fiveNumbers = [1, 2, 3, 4, 5, 6];
//const mixArray: fiveNumbers = [1, "teste", 3, 4, 5];
console.log(myFiveNumbers);
const anotherUser = ["Alex", 38];
console.log(anotherUser);
let myReadOnlyType = [1, 2];
console.log(myReadOnlyType);
//myReadOnlyType[1] = 3;
myReadOnlyType = [3, 4];
console.log(myReadOnlyType);
