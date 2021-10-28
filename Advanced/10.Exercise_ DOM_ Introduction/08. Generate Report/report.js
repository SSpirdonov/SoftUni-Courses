function generateReport() {
  
  let th = document.querySelector("thead tr").getElementsByTagName("th");
  let len = th.length;
  let checkedColumns = [];
  let resArr = [] ;
  for (let i = 0; i < len; i++) {
    let chBoxName = th[i].getElementsByTagName("input")[0].name;
    let chBoxValue = th[i].getElementsByTagName("input")[0].checked;
    if (chBoxValue) {
      checkedColumns.push(i);
      resArr.push(chBoxName);
    }
  }
  let row = document.querySelector("tbody").getElementsByTagName('tr');
  let rowLen = row.length;
  let finalArr = [];
  
  for (let i = 0; i < rowLen; i++) {
    let obj = {};
    
    for (let j = 0 ; j < checkedColumns.length ; j ++ ) {

      let rowCellContent = row[i].getElementsByTagName('td')[j].innerHTML ;
      obj[resArr[j]] = rowCellContent;
    }
    finalArr.push(obj);
  }
  let outputText = JSON.stringify(finalArr);  
  document.getElementById('output').innerHTML = outputText;
}
