
// function canPrint( device ) {    
//     device.print = (num) => { console.log(`${device.name} is printing a page ${num}`); }
// }

// const printer = { name: 'ACME Printer' };
// canPrint(printer);
// printer.print(25);
//---------------------------------------------------------
let count = 5;
const parser = {
  increment() { count++; },
  decrement() { count--; },
  reset() { count = 0; }
}
parser['reset']();
console.log(count);
//---------------------------------------------------------