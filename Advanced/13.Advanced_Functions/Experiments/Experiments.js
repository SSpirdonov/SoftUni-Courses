// const obj = {
//     name: 'Peter',
//     outer() {
//       console.log(this); // Object {name: "Peter"}
//       function inner() { console.log(this); }
//       inner();
//     }
// }
// obj.outer(); // Window
  
//--------------------------------------------------

// const obj = {
//     name: 'Peter',
//     outer() {
//       console.log(this); // Object {name: "Peter"}
//       const inner = () => console.log(this);
//       inner();
//     }
// }
// obj.outer(); // Object {name: "Peter"}
  
//----------------------------------------------------

// function greet() {
//     console.log(this.name);
//     console.log(this.age);
//   }
  
//   let person = { name:'Alex' , age: 15};
// greet.call(person); // Alex

const sharePersonalInfo = function (...activities) {
      let info = `Hello, my name is ${this.name} and\n`+`I'm a ${this.profession}.\n`;
      info += activities.reduce((acc, curr) => {
          let el  = `--- ${curr}\n`;
          return acc + el;
      }, 
    "My hobbies are:\n").trim();
    return info;
}
const firstPerson = { name: "Peter", profession: "Fisherman" };
console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming','football'));
// Hello, my name is Peter.
// I'm a Fisherman.
// My hobbies are:
// --- biking
// --- swimming
// --- football

  