function serializeString( inp ) {
    let text =  inp.shift();
    let doneChar = [] ;
    for ( i = 0 ; i < text.length; i ++ ) {
        if ( !doneChar.includes(text[i]) ) {
            doneChar.push(text[i]) ;
        }
    }
    doneChar.forEach( el => {        
        let result = el + ':' ;
        for ( i = 0 ; i < text.length ; i ++ ) {
            if ( el === text[i]) {
                result += i + '/';                
            }
        }
        result = result.substring ( 0 , result.length - 1 ) ;
        console.log(result);
    } );
}

//serializeString( [ 'abababa' ] );
serializeString( [ 'avjavamsdmcalsdm' ] );
