// console.log("Hello.");
// setTimeout(() => {
// console.log("Goodbye!");
// }); 
// console.log("Hello again!");

// setTimeout(() => {console.log("this is the first message")}, 5000);
// setTimeout(() => {console.log("this is the second message")}, 3000);
// setTimeout(() => {console.log("this is the third message")}, 1000);

console.log('Before promise');
new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('done');
      }, 500);
    })
    .then(function(res) {
      console.log('Then returned: ' + res);
    });
    console.log('After promise');

    