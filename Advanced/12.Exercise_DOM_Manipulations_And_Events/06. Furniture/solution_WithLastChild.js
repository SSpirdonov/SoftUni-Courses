function solve() {
const textArr_1 = document.getElementsByTagName('textarea')[0] ;
const textArr_2 = document.getElementsByTagName('textarea')[1] ;
const generateBtn = document.getElementsByTagName('button')[0] ;
const byBtn = document.getElementsByTagName('button')[1] ;
const table = document.querySelector('table');

const templateTable = document.querySelectorAll('tr')[1] ;
const tBody = document.getElementsByTagName('body')[0] ;

generateBtn.addEventListener('click' , generateFun);
byBtn.addEventListener('click', byFun);

//--------------------------FUNCTIONS--------------------------

  function generateFun(ev) {
    const inp = JSON.parse(textArr_1.value) ;

    inp.forEach(el => {
      
      let newTr = templateTable.cloneNode(true);
      document.getElementsByTagName('tbody')[0].appendChild(newTr) ;
      let currentRow = document.getElementsByTagName('tbody')[0].lastChild ;
      currentRow.getElementsByTagName('img')[0].src = el.img ;
      currentRow.getElementsByTagName('p')[0].textContent = el.name ;
      currentRow.getElementsByTagName('p')[1].textContent = el.price ;
      currentRow.getElementsByTagName('p')[2].textContent = el.decFactor ;
      
    });
    let arr = Array.from(table.children[1].children);
    for ( let i = 0 ; i < arr.length; i++ ) {
      arr[i].querySelectorAll('td input')[0].disabled = false;
    }
    
  }

  function byFun(ev) {
    let arr = Array.from(table.children[1].children);
    let boughtFurniture = 'Bought furniture: ' ;
    let totalPrice = 0 ;
    let factorCount = 0 ;
    let factorSum = 0 ;
    for ( let i = 0 ; i < arr.length; i++ ) {
      if (arr[i].querySelectorAll('td input')[0].checked) {
        boughtFurniture += arr[i].querySelectorAll('p')[0].textContent + ', ';
        totalPrice += Number(arr[i].querySelectorAll('p')[1].textContent);
        factorCount ++ ;
        factorSum += Number(arr[i].querySelectorAll('p')[2].textContent);
      }      
      
    }
    boughtFurniture = boughtFurniture.slice(0,-2);    
    textArr_2.value = boughtFurniture +'\n' + `Total price: ${totalPrice.toFixed(2)}\n` + `Average decoration factor: ${factorSum / factorCount}`
  }
  
}