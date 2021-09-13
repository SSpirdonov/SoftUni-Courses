function MaxNumber(inp) {
    let resArr = [] ;
    for ( i = 0 ; i < inp.length ; i ++ ) {
        let top = false ;
        for ( j = i ; j < inp.length - 1; j ++ ) {
            if ( inp[i] > inp[j+1] ) {
                top = true ;
            } else {
                top = false ;
                break ;
            }    
        }    
        if (top) {
            resArr.push(inp[i]);
        }
    }
    let resStr = resArr.join(' ') ;
    resStr += ' ' + inp[inp.length-1] ;
    console.log(resStr);
}
MaxNumber ( [1, 4, 3, 2] ) ;
MaxNumber ( [14, 24, 3, 19, 15, 17] ) ;
MaxNumber ( [41, 41, 34, 20] ) ;