function asciiSumator(inp) {
    let c1 = inp.shift().charCodeAt(0) , c2 = inp.shift().charCodeAt(0) ;
    let sum = 0 , ch_1 = 0 , ch_2 = 0;
    inp = inp[0];
    if ( c1 < c2 ) {
        ch_1 = c1 , ch_2 = c2;
    } else {
        ch_1 = c2 , ch_2 = c1;
    }

    for ( i = 0 ; i < inp.length ; i++ ) {
        let currSymbol = inp[i].charCodeAt(0) ;
        if ( currSymbol > ch_1 &&  currSymbol < ch_2 ) {
            
            sum += currSymbol ;
        }
    }
    console.log(sum);
}
asciiSumator([
    '.',
    '@',
    'dsg12gr5653feee5'
]);
console.log('-----------------------------------');

asciiSumator([
    '?',
    'E',
    '@ABCEF'
]);
console.log('-----------------------------------');

asciiSumator([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'
]);