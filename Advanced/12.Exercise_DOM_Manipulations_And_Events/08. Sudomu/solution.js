function solve() {
    const quickCheckBtn = document.getElementsByTagName('button')[0] ;
    const clearBtn      = document.getElementsByTagName('button')[1] ;
    quickCheckBtn.addEventListener('click', quickCheck) ;
    clearBtn.addEventListener('click', clear) ;
    let tablArr = [] ;
    let numOfRows = document.querySelectorAll('tbody tr').length;
    
    function quickCheck(e) {        

        for ( let i = 0; i < numOfRows; i++ ){
            let row = document.querySelectorAll('tbody tr ')[i];
            let rowArr = [];
            Array.from(row.querySelectorAll('td input')).forEach( cell => {
                rowArr.push(Number(cell.value));
            });
            tablArr.push(rowArr);
        }
        
    }
    
    function clear(e) {
        for ( let i = 0; i < numOfRows; i++ ){
            let row = document.querySelectorAll('tbody tr ')[i];
            Array.from(row.querySelectorAll('td input')).forEach( cell => {
                cell.value = '';
            });             
        }
    }
}