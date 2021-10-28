function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  
  function onClick() {
   let inp = JSON.parse(document.querySelector('#inputs textarea').value);

   console.log(inp);
    let globalObj = {}
    inp.forEach((el) => {
      let arr = el.split(" - ");
      let rName = arr[0];
      let workers = arr[1].split(", ");
      let employes = [];
      workers.forEach((employe) => {
        employes.push(employe.split(" "));
      });
      if (!Object.keys(globalObj).includes(rName)) {
        let mans = {};
        for (let i = 0; i < employes.length; i++) {
          mans[employes[i][0]] = Number(employes[i][1]);
          globalObj[rName] = mans;
        }
      } else {
        let currentObj = globalObj[rName];
        employes.forEach((empl) => {
          if (!Object.keys(currentObj).includes(empl[0])) {
            currentObj[empl[0]] = Number([empl[1]]);
          }
        });
      }
    });
    let globalArr = Object.entries(globalObj);
    let workArr = [];
    for (let i = 0; i < globalArr.length; i++) {
      let innerArr = Object.entries(globalArr[i][1]);
      innerArr.sort((a, b) => b[1] - a[1]);
      let avr = 0;
      innerArr.forEach((el) => {
        avr += el[1];
      });
      avr = Number((avr / innerArr.length).toFixed(2));
      innerArr.unshift(["avr", avr]);
      innerArr.unshift(globalArr[i][0]);
      workArr.push(innerArr);
    }
    workArr.sort((a, b) => b[1][1] - a[1][1]);
    
    let bestRestr = workArr[0][0];
    let avgSalary = workArr[0][1][1];
    let bestSalary = workArr[0][2][1];
    
    let firstString = `Name: ${bestRestr} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    let secondString = "";
    for (let i = 2; i < workArr[0].length; i++) {
      secondString += `Name: ${workArr[0][i][0]} With Salary: ${workArr[0][i][1]} ` ;
    }
    document.querySelector('#bestRestaurant p').textContent = firstString;
    document.querySelector('#workers p').textContent = secondString ;
  }
}

