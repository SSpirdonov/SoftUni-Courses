function PrintAndSum( a , b) {
    let resStr = "" ;
    let sum = 0 ;
    for ( let i = a ; i <= b ; i++  ) {
        resStr += i + " " ;
        sum += i ;
    }
    console.log( resStr.trim() );
    console.log( `Sum: ${sum}` );
}
PrintAndSum( 50 , 60 ) ;