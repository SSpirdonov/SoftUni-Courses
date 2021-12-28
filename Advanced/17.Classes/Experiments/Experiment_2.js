class Circle {
    constructor (radius) {
        this.radius = radius ;
        //this.diameter = radius * 2 ;
    }

    get diameter() {
        return this.radius * 2 ;
    }

    set diameter(value) {
        this.radius = value / 2 ;
    }
}

const c = new Circle(4);
console.log('Instance ', c);
console.log('Radius', c.radius);
console.log('Diameter', c.diameter);
c.diameter = 8;
console.log('Instance ', c);
console.log('Radius', c.radius);
console.log('Diameter', c.diameter);