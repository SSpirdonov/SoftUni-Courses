function passwordValidator(password) {
    let isValid = true ;
    if ( !isBetween6and10characters(password) ) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false ;
    }
    
    if ( !consistOnlyofLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false ;
    }

    if ( !haveAtLeast2Digits(password) ) {
        console.log( 'Password must have at least 2 digits' );
        isValid = false ;
    }
    if (isValid) {
        console.log( 'Password is valid' );
    }



//-------------------------------Functions--------------------------------

    function isBetween6and10characters(str) {
        return (str.length >= 6 && str.length <= 10 ) ;
    }
//  -------------------------------------------------
    function consistOnlyofLettersAndDigits(str) {
        str = str.split('');
        for ( i = 0 ; i < str.length ; i++ ) {
            let chNum = str[i].charCodeAt(0) ;
            if ((chNum >= 'a'.charCodeAt(0) && chNum <= 'z'.charCodeAt(0)) || 
                (chNum >= 'A'.charCodeAt(0) && chNum <= 'Z'.charCodeAt(0)) ||
                (chNum >= '0'.charCodeAt(0) && chNum <= '9'.charCodeAt(0))  
                ) {
                continue ;
            } else {
                return false ;
            }
        }
        return true; 
    }
//  -------------------------------------------------
    function haveAtLeast2Digits(str) {
        let digitCount = 0 ;
        for ( i = 0 ; i < str.length ; i++ ) {
            let chNum = str[i].charCodeAt(0) ;
            if ( (chNum >= '0'.charCodeAt(0) && chNum <= '9'.charCodeAt(0))) {
                digitCount ++ ;
            } 
        }
        if ( digitCount >= 2 ){
        return true ;
        } 
        return false ;
    }
}

//passwordValidator ( 'logIn' ) ;
//passwordValidator ( 'MyPass123' ) ;
passwordValidator ( 'Pa$s$s' ) ;
