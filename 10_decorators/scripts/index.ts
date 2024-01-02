/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Exemplo de decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function myDecorator() {
    console.log("Iniciando decorator");

    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log("-------------------------");
        console.log(`------target: ${target}`);
        console.log(target);
        console.log(`------propertyKey: ${propertyKey}`);
        console.log(`------descriptor: ${descriptor}`);
        console.log(descriptor);
        console.log("-------------------------");
    }
}



class myClass {
    name: string = "alex";
    @myDecorator()
    testing() {
        console.log("Terminando execução do metodo");
    }
}

const myObj = new myClass();
myObj.testing();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Multiplos Decorators
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function a() {
    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a.");
    }
}

function b() {
    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou b.");
    }
}

class MultipleDecorators {
    @a()
    @b() //excutada primeiro (de baixo pra cima)
    testing() {
        console.log("terminando excução");
    }
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Class Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function classDec(constructor: Function) {
    console.log(constructor);
    if(constructor.name === "User") {
        console.log("Criando usuário")
    }

}

@classDec
class User {
    name
    constructor(name: string) {
        this.name = name;
    }
}
const alex = new User("alex");
console.log(alex);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Method Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function enumerable(value: boolean) {
    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    }
}
class Machine {
    name
    constructor(name: string) {
        this.name = name;
    }
    
    @enumerable(false)
    showName() {
        console.log(this);
        console.log(`O nome da maquina é ${this.name}`);
    }
}

const trator = new Machine("Trator");
//trator.showName();

for (var chave in trator) {
    console.log(chave);
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Acessor Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class Monster {
    name
    age
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get ShowName() {
        return `O nome do monstro é ${this.name}`;
    }

    get ShowAge() {
        return `A idade do monstro é ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Property Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// ! criando um Decorator que vai formatar a propriedade para conster 5 digitos (zeros a esquerda)
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            set: setter, 
            get: getter,
        });
    }
}
class ID {
    @formatNumber()
    id;

    constructor(id: string) {
        this.id = id;
    }
}
const newItem = new ID("1");
console.log(newItem);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Exemplo de uso com Class Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    }
}

const newBook = new Book(1);
const newPen = new Pen(2);

console.log(newBook.createdAt);
//console.log(newPen);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Exemplo de uso com Method Decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function checkIfUserPosted() {
    return function(
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        //console.log(childFunction);
        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                console.log(`Usuário já postou`);
                return null;
            } else {
                return childFunction.apply(this, args);
            }
        }
        return descriptor;
    }
}
class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuario: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Exemplo de property decorator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function MaxChar(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log("Limite de caracteres atingido.")
            } else {                
                value = newVal;
            }
        }

        Object.defineProperty(target, propertyKey, {
            set: setter, 
            get: getter,
        });
    }
}

class Admin {
    @MaxChar(10)
    userName
    constructor(userName: string) {
        this.userName = userName;
    }
}

let pedro = new Admin("Pedro123456789");
console.log(pedro.userName);
let lee = new Admin("Lee");
console.log(lee.userName);
