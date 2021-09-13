function processOddNumbers( inp ) {
    let arr = [] ;
    for ( let i = 0 ; i < inp.length ; i ++ ) {
        if ( i % 2 === 1 ) {
            arr.push(inp[i] * 2) ;
        }
    }
    console.log( arr.reverse().join(' ') );
}
processOddNumbers( [3, 0, 10, 4, 7, 3] ) ;