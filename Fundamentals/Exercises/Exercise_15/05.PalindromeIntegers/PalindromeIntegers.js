function palindromeIntegers(inp) {
    
    for ( let j = 0 ; j < inp.length ; j++ ) {
    let checkedItem = inp[j].toString().split('') ;    
    let isPalindrone = true ;
        for ( let i = 0 ; i < checkedItem.length ; i ++ ) {
            let fNum = checkedItem[i] ;
            let lNum = checkedItem[checkedItem.length - 1 - i] ;
            if ( !(fNum === lNum )  ) {
                isPalindrone = false ;
                break ;
            }
        }
        if ( isPalindrone ) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
} 

//palindromeIntegers( [123,323,421,121] ) ;
palindromeIntegers( [32,2,232,1010] )  ;