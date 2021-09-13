function valueOfAString( inp ) {
    let totalSum = 0 ;
    let text = inp[0] ;   
    let command = inp[1] ;
    if ( command !== 'UPPERCASE' && command !== 'LOWERCASE' ) return ;
    if ( command === 'UPPERCASE' ) {
        for ( i = 0 ; i < text.length ; i ++ ) {
            let letterWeight = 0 ;
            if ( text[i].charCodeAt(0) >= 'A'.charCodeAt(0) && text[i].charCodeAt(0) <= 'Z'.charCodeAt(0) ) {
                letterWeight = text[i].charCodeAt(0) ;
                totalSum += letterWeight ;
            }
        }        
    } else if ( command === 'LOWERCASE' ) {
        for ( i = 0 ; i < text.length ; i ++ ) {
        let letterWeight = 0 ;
            if ( text[i].charCodeAt(0) >= 'a'.charCodeAt(0) && text[i].charCodeAt(0) <= 'z'.charCodeAt(0) ) {
                letterWeight = text[i].charCodeAt(0) ;
                totalSum += letterWeight ;
            }
        }    
    }
    console.log(`The total sum is: ${totalSum}`);
}

valueOfAString ( ['HelloFromMyAwesomePROGRAM','LOWERCASE']) ;
valueOfAString ( ['AC/DC','UPPERCASE'] ) ;