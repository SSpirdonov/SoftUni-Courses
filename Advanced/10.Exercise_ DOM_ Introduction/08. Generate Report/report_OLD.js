function generateReport() {
  //let th = document.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
  let th = document.querySelectorAll("thead tr")[0].getElementsByTagName("th");
  let len = th.length;
  let checkedColumns = [];
  for (let i = 0; i < len; i++) {
    let chBoxName = th[i].getElementsByTagName("input")[0].getAttribute("name");
    let chBoxValue = th[i].getElementsByTagName("input")[0].checked;
    if (chBoxValue) {
      checkedColumns.push(i);
      let obj = {} ;
      let row = document.querySelector("tbody").getElementsByTagName('tr');
      let rowLen = row.length;
      for ( j = 0 ; j < rowLen ; j++ ) {
          let rowValue = row[j].getElementsByTagName('td')[i].textContent;
          //console.log(rowValue);
          obj[chBoxName] = rowValue ;
          console.log(obj);
      }

      console.log(rowLen);
    
      
    }
  }

  //console.log( checkedColumns );

  //console.log(th,len);
}
