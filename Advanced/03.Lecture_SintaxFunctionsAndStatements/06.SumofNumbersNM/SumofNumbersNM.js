function sumofNumbersNM( nS, mS ) {
    let n = Number(nS) , m= Number(mS) , sum = 0 ;

    for ( i = n ; i <= m ; i ++ ) {
        sum += i ;
    }

    console.log(sum);
}

sumofNumbersNM('1', '5');
sumofNumbersNM('-8', '20');