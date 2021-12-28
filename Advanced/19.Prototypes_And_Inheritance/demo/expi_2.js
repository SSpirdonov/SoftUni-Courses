const obj1 = {
    a: 1,
    b: 2,
    //fu: function() {return this.a + this.b;} // и това е вярно 
    fu () {return this.a + this.b;} 
    
}

const maytap = Object.assign({},obj1);

maytap.fu2 = function() {return this.a * this.b}
// console.log(obj1.fu());
// console.log(maytap.fu());
obj1.a = 3;
maytap.a = 3;
console.log(maytap.fu2());

// console.log(maytap.fu2());

// console.log(maytap);