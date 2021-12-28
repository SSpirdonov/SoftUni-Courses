const person = {
    name: 'Peter',
    age: 28
}

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.defineProperty(person, 'lastName',{
    value: 'Jackson',   
    writable: false,   
    enumerable: false, 
    configurable: true
}));

for (let key in person) {
    console.log(key , '->' , person[key]);
}

// person.lastName = 'Johnson';
console.log(person);
console.log(person.lastName);