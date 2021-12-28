
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return this.radius ** 2 * Math.PI;
    }

}
// console.log(Circle.prototype.hasOwnProperty('getArea')); //da

const c = new Circle(5);
// console.log(c.prototype); // ne
// console.log(c.__proto__); // da
// console.log(c); // da
// console.log(c.hasOwnProperty('getArea')); //ne
//console.log(c.hasOwnProperty('radius')); //da
// console.log(Object.getPrototypeOf(c).hasOwnProperty('getArea')); // da
// console.log(Object.getPrototypeOf(c).hasOwnProperty('constructor')); // da
// console.log(Circle.prototype.hasOwnProperty('radius')); //ne
