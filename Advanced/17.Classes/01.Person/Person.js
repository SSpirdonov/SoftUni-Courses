
class Person {
        constructor(firstName, lastName, age, email) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //         this.email = email;
               Object.assign(this,{
                   firstName,
                   lastName,
                   age,
                   email
               }) 
        }
        toString(){
                return  `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
}

class Person1 {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
       return  `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}      

const person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(person.toString());
return person.toString();