// function extend(classDefinition) {
//     classDefinition.prototype.species = 'Human';
//     classDefinition.prototype.toSpeciesString = function () {
//         return `I am a ${this.species}. ${this.toString()}`
//     }
// }

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

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name,email) ;
        this.subject = subject ;        
    }

    toString() {
        return this.subject + ' ' + super.toString();
    }
}

class Student extends Person {
    constructor (name,email,level){
        super(name,email);
        this.level = level ;
    }
}

class InternTeacher {
    constructor(name,email,subject,level) {
        this.teacher = new Teacher(name,email,subject);
        this.student = new Student(name,email,level);
    }

    toString() {
        return this.teacher.toString() + ' level: ' + this.student.level ;
    }
}

const t = new Teacher('John', 'john@john.john', 'Math');
// console.log(t);
// console.log(t instanceof Teacher);
// console.log(t instanceof Person);

// const s = new Student('Peter', 'peter@abv.bg', 7);
// console.log(s);
//extend(Person);
console.log(t.toString());

// console.log(t.species);
// console.log(t.toSpeciesString());

const intern = new InternTeacher('Ivan', 'ivanov@abv.bg', 'History', 9);
console.log(intern.toString());