const myProto = {
    sayHi() {
        console.log(`${this.name} ${this.lName} says hi`);
    },
    lName : 'Ivanov'
}

const instance = Object.create(myProto);
console.log(instance);
instance.name = 'John';
console.log(instance);
console.log(instance.lName);

instance.sayHi();