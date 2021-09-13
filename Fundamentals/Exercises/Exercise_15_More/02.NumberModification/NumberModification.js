function numberModification( num ) {
    let numArr = num.toString().split('');
    let notEnd = false ;
    do {
         if ( !isHigherHan5(numArr) ) {
         numArr.push('9') ;
         } else {
         notEnd = true ;
         break ;
        }
    } while (!notEnd) ;    
    console.log( numArr.join(''));

//------------- FUNCTIONS --------------------------    
    function isHigherHan5(arr) {
        let sum = 0 , len = arr.length ;
        for ( let i = 0 ; i < len ; i++  ) {
            sum += Number(arr[i]) ;
        }
        if ( sum / len > 5 ) {
            return true ;
        } else {
            return false ;
        }
    }
    
}

numberModification( 101 ) ;
numberModification( 5835 ) ;