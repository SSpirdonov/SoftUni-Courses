function negativePositiveNumbers( inp ) {
    let resArr = [] ;
    for ( let  el of inp ) {
        if ( el < 0 ) {
            resArr.unshift(el) ;
        } else {
            resArr.push(el) ;
        }
    }
    resArr.forEach( el => {
        console.log(el);
    } );
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);