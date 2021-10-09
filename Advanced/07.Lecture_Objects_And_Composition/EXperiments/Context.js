const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  console.log(person.fullName()); // 'Peter Johnson'  
//-----------------------------------------------------
const getFullName = person.fullName;
console.log(getFullName()); // 'undefined undefined'
const anotherPerson = { firstName: 'Bob',
                        lastName: 'Smith' };
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // 'Bob Smith'
// //------------------------------------------------------
// sorting helper
// const compareNumbers = {
//     ascending :(a, b) => a - b,
//     descending: (a, b) => b - a
// };
// let res = compareNumbers.ascending(10,7);
// let des = compareNumbers.descending(10,7)

// console.log(des);
  