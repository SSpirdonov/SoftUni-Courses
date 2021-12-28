function Person(first, last, age) { 
        this.firstName = first;
        this.lastName = last;
        this.age = age; 
    } 
    
    Person.prototype.nationality = function () {
        this.nat = "Ahmak";
        return this.nat
    }
    
    const inst = new Person('Ivan','Petrov',23,'ahmak');
    //console.log(inst.nationality());
    inst.nationality();
    console.log(inst);    