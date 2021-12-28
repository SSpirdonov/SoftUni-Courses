class Stringer {
    
    constructor(innerString,innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length ;
    }

    decrease(length) {
        this.innerLength -= length ;
        if ( this.innerLength < 0  ) {
            this.innerLength = 0 ;
        }
    }

    toString() {
        let lenNew = this.innerLength ;
        let lenOrg = this.innerString.length ;
        let str = '' ;
        if(lenNew === 0 ) {return '...' ;}
        if(lenNew >= lenOrg ) { return this.innerString ;}
        if(lenNew > 0 && lenNew < lenOrg) { return this.innerString.slice(0,(lenOrg-lenNew)) + '...' ;}
    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
