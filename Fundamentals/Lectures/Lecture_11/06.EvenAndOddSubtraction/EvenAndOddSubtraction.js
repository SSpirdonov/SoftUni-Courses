function EvenAndOddSubtraction(inp) {
    let evenSum = 0 ;
    let oddSum  = 0 ;
    for ( i = 0 ; i < inp.length ; i ++ ) {
        let num = Number(inp[i]) ;
        if ( num % 2 === 0 ) {
            evenSum += num ;
        } else {
            oddSum  += num ;
        }
    }
    console.log(evenSum - oddSum);
}
EvenAndOddSubtraction ([1,2,3,4,5,6]) ;
EvenAndOddSubtraction ([3,5,7,9]) ;
EvenAndOddSubtraction ([2,4,6,8,10]) ;