function negativeOrPositiveNumbers( inp ) {
    let L = inp.length ;
    let arr = [] ;
    for ( let i = 0 ; i < inp.length ; i ++) {
        let num = inp[i] ;
        if ( num < 0 ) {
            arr.unshift(num) ;
        } else {
            arr.push(num) ;
        }
    }
    console.log( arr.join('\n') ) ;
}
negativeOrPositiveNumbers([3, -2, 0, -1]);