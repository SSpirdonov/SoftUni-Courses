function perfectNumber(num) {
    let res = 0 ;
    for (  i = 1 ; i < num; i ++ ) {
        if ( num % i === 0 ) {
            res += i ;
        }
    }
    if (  res === num ) console.log("We have a perfect number!");
    else console.log( "It's not so perfect." );
}
perfectNumber (28) ;