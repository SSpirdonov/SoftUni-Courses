function classHierarchy() {
//------------------------------------------  
    class Figure {
    constructor() {
      this.units = 'cm';
    }

    rates = {
        'm'  : 1,
        'cm' : 0.01,
        'mm' : 0.001
    }

    oldUnit = { old : 'cm' }
    
    get area() { return }

    changeUnits(newUnit) {   
      this.units = newUnit;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }
//------------------------------------------------
  class Circle extends Figure {
      constructor(radius,units) {
        super();
        this.units = !units ? 'cm' : units;
        this.radius = radius;  
    }
    
    get area() {
        let radius = this.radius * this.rates[this.oldUnit.old] /  this.rates[this.units] ;
        return radius * radius * Math.PI;
    }

    toString() {       
        let radius = this.radius * this.rates[this.oldUnit.old] /  this.rates[this.units] ;
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
    }    

    
  }

  //-----------------------------------------------------
  class Rectangle extends Figure {
    constructor(a,b,units) {
      super();
      this.units = !units ? 'cm' : units;
      this.a = a;  
      this.b = b;
    }
  
  get area() {
      let a = this.a * this.rates[this.oldUnit.old] /  this.rates[this.units] ;
      let b = this.b * this.rates[this.oldUnit.old] /  this.rates[this.units] ;      
      return a*b;
    }

  toString() {       
    let a = this.a * this.rates[this.oldUnit.old] /  this.rates[this.units] ;
    let b = this.b * this.rates[this.oldUnit.old] /  this.rates[this.units] ;
    return `Figures units: ${this.units} Area: ${this.area} - width: ${a}, height: ${b}`;
  }    

  
 }  

  return {
    Figure,
    Circle,
    Rectangle
  };
}

let classes = classHierarchy();

let Circle = classes.Circle;
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

let Rectangle = classes.Rectangle;
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4









// let Rectangle = classes.Rectangle;
// let Circle = classes.Circle;

// let c = new Circle(5);
// console.log(c.area);
// assert.equal(c.area,78.53981633974483, "1");
// assert.equal(c.toString(),"Figures units: cm Area: 78.53981633974483 - radius: 5","2");
//let r = new Rectangle(3, 4, 'mm');
// assert.equal(r.area,1200,"3");
// assert.equal(r.toString(),"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
//r.changeUnits('cm');
// assert.equal(r.area,12,"5");
// assert.equal(r.toString(),"Figures units: cm Area: 12 - width: 3, height: 4","5");

// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
