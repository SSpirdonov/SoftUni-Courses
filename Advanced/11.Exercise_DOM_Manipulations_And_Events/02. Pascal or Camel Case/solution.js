function solve() {
  let conv= document.getElementById('naming-convention').value;
  let str = document.getElementById('text').value;
  let err = false;
  const resultContainer = document.getElementById('result')
  str = str.toLowerCase().split(' ');
  let result = [] ;
  if (conv === "Camel Case") {
    result.push(str[0]);
    for (let i = 1; i < str.length; i++) {
      result.push(str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length));
    }  
  } else if (conv === "Pascal Case") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length));
    }
  } else {
    err = true ;
  }
  if (!err) {
    result = result.join('');
    document.getElementById('result').textContent = result ;
  } else {
    resultContainer.innerHTML = "Error!";
  }
}
