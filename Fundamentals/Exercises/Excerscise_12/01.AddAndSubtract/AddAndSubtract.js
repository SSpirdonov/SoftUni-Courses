function AddAndSubtract(inp) {
    let oSum = 0 ;
    let mSum = 0 ;
    let mInp = '[';
    for ( i = 0 ; i < inp.length ; i++ ) {
        oSum += inp[i] ;
        if ( inp[i] % 2 === 0 ) {
            inp[i] += i ;
        } else {
            inp[i] -= i ;
        }
        mSum += inp[i] ;
        if ( i !== inp.length - 1) {
            mInp += ' ' + inp[i] + ','; 
        } else {
            mInp += ' ' + inp[i] + ' ]';
        }
    }
    console.log(mInp);
    console.log(oSum);
    console.log(mSum);
}
AddAndSubtract( [5, 15, 23, 56, 35] ) ;
console.log("-----------------------");
AddAndSubtract( [-5, 11, 3, 0, 2] ) ;