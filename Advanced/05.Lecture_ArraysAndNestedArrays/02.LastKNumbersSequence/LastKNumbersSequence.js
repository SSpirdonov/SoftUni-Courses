function lastKNumbersSequence( n, k ) {
    let arr = [1] , lastIndex = k;
    for ( let i = 1 ; i < n ; i ++ ) {
        let next = 0 , firstIndex = 0;
        if ( i - k <= 0  ) { 
            firstIndex = 0 ;
        } else {
            firstIndex = i - k ;
        }
        for (let j = firstIndex ; j < i ; j ++ ) {
            next += arr[j] ;
        }
        arr.push(next) ;
    }
    console.log(arr.join());
}
lastKNumbersSequence( 6,3 );
lastKNumbersSequence( 8,2 );