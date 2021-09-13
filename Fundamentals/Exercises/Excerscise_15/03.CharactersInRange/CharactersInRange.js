function charactersInRange( char1 , char2) {
    let numChar1 = char1.charCodeAt(0) ;
    let numChar2 = char2.charCodeAt(0) ;
    let n1 = Math.min( numChar1 , numChar2 ) + 1;
    let n2 = Math.max( numChar1 , numChar2 ) - 1;
    let result = "";
    for ( i = n1 ; i <= n2 ; i ++ ) {
        result += String.fromCharCode(i) + " ";
     }
    console.log(result.trim());
}
charactersInRange ( 'a','d' ) ;
charactersInRange ( '#',':' ) ;
charactersInRange ( 'C','#' ) ;