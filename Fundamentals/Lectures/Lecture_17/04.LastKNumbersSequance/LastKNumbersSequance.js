function lastKNumbersSequance( n , k ) {
    let resArr = [1] ;
    let arr = [] ;
    let start = 0;
    let end   = 0;
    let sum = 0 ;
    for ( let i = 1 ; i < n ; i ++ ) {
        if ( i <= k) {
            start = 0 ;
            end = i ;
        } else {
            start = i - k;
            end = i ;
        }
        arr = resArr.slice(start,end) ;
            for ( let j = 0 ; j < arr.length ; j ++ ) {
                sum += arr[j] ;
            }
        resArr.push(sum) ; sum = 0 ;
    }
    console.log(resArr.join(' '));
}
lastKNumbersSequance (8 , 2 ) ;