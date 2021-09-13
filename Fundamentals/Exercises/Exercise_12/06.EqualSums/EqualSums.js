function EqualSums(inp) {
    let len = inp.length ;
    let lSum = 0 , rSum = 0 ;
    let no = true ;
    for ( let i = 0 ; i < len ; i ++ ) {
        for ( let j = 0 ; j < i ; j ++ ) {
           lSum += inp[j] ;
        }
        for ( let j = len-1 ; j > i ; j -- ) {
            rSum += inp[j] ;
        }
        if ( lSum === rSum ) {
            console.log(i);
            no = false ;
        }
        lSum=0;
        rSum = 0;
    }
    if (no) {
    console.log("no");
    }
}
EqualSums ( [1, 2, 3, 3] ) ;
EqualSums ( [1 , 2] ) ;
EqualSums ( [1] ) ;
EqualSums ( [1, 2, 3] ) ;
EqualSums ( [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4 ]) ;
