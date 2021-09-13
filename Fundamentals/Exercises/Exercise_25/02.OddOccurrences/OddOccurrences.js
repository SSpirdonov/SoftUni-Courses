function solve( str ) {
    let inp = str.split(' ') ;
    let map = new Map();
    for ( let inpStr of inp ) {
        let word = inpStr.toLowerCase();
        let ocurrence = 0 ;
        map.set(word, ocurrence) ;
        inp.forEach(element => {
            if ( word === element.toLowerCase() ) { ocurrence++ ; }
        });
        map.set(word , ocurrence) ;
    }
    let sorted = Array.from(map) ;
    let finalStr = '' ;
    sorted.forEach ( el => {
        if ( el[1] % 2 === 1 ) {
            finalStr += el[0] + ' ' ;
        }
    } );
    console.log( finalStr.trim() );
}

solve( 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#' );