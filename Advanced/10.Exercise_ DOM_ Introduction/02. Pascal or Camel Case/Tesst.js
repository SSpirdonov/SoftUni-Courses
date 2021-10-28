function solve() {
//   let conv= document.getElementById('naming-convention').value;
//   let str = document.getElementById('text').value;
//   let conv = "Pascal Case";
//   let str = "secOND eXamPLE";

//   let conv = 'Camel Case'
//   let str = 'this is an example' ;
    let str = '' ;
    let conv  = 'Another Case';

  str = str.toLowerCase().split(" ");
  let result = [];
  if (conv === "Camel Case") {
    result.push(str[0]);
    for (let i = 1; i < str.length; i++) {
      result.push(
        str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length)
      );
    }  
  } else if (conv === "Pascal Case") {
    for (let i = 0; i < str.length; i++) {
      result.push(
        str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length)
      );
    }
  } else {
    console.log("Error!");
  }
  result = result.join('');
  console.log(str, result);
}
solve();
