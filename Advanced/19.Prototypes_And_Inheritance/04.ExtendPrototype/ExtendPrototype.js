class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

function extend(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

let p1 = new Person('Ivan', 'ivan@abv.bg')
console.log(Person.prototype);
//console.log(p1.species);
//console.log(p1.toSpeciesString());
extend(Person);
console.log(Person.prototype);

let p2 = new Person('Ivan', 'ivan@abv.bg')
console.log(p2);

let p = new Person("Pesho","email@hit.bg");
console.log(p2.species);
console.log(p2.toSpeciesString());



// expect(p.species).to.equal('Human',"No species property");
// expect(p.toSpeciesString()).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");