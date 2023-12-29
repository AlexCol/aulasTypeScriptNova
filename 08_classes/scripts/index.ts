/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Classes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class User {
    name!: string
    age!: number
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
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const newUser = new NewUser("Alexandre", 38);
console.log(newUser);
newUser.age = 40;
console.log(newUser);
//newUser.job = "programmer";