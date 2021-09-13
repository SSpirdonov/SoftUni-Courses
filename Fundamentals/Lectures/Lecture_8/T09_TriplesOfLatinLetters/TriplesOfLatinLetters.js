function TriplesOfLatinLetters(n) {
    let letter = "" ;

    for ( let i = 0 ; i < n  ; i++ ) {
        let l1 = String.fromCharCode(97 + i) ;
        for ( let j = 0 ; j < n  ; j++ ) {
            let l2 = String.fromCharCode(97 + j) ;
            for ( let k = 0 ; k < n  ; k++ ) {
                let l3 = String.fromCharCode(97 + k) ;
                console.log(l1+l2+l3);
                
            }
        }    
    }


    
}
TriplesOfLatinLetters(8) ;