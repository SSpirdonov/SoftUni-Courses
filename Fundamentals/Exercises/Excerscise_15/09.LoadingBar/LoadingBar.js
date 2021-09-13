function floadingBar(num) {
    let result = `${num}% [` ;

    for ( i = 0 ; i < 10 ; i ++ ) {
        if ( num/10 <= i ) {
            result += '.' ;
        } else {
            result += '%' ;
        }
    }
    result += "]" ;
    if (num === 100) {
        console.log( "100% Complete!" );
        console.log( `[%%%%%%%%%%]` );
    } else {
        if ( num !== 0 ) {
            console.log( result );
            console.log( "Still loading..." );    
        } else {
            console.log( result );
        }
    }
}

floadingBar ( 50 ) ;
