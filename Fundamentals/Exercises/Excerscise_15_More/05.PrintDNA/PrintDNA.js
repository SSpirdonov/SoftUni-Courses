function PrintDNA(num) {
    let seq1 = ['AT']  , seq2 = ['CG'] , seq3 = ['TT'] , seq4 = ['AG'] , seq5 = ['GG'] ;
    let sequence = [ seq1  , seq2  ,seq3  ,seq4  ,seq5 ] ;
    let repeat = 0 ;
    let midSequence = [] ;
    for ( let i = 0 ; i < num ; i++ ) {
        midSequence.push(sequence[repeat]) ;
        repeat++ ;
        if (repeat === 5) repeat = 0 ;
    }
    repeat = 0 ;
    let row = "" ;
    for ( let i = 0 ; i < midSequence.length ; i++ ) {
        let currArr  = (midSequence[i].join());
        let firstSymbol  = currArr[0] ;
        let secondSymbol = currArr[1] ;
        switch(repeat) {
            case 0 : row = "**" + firstSymbol + secondSymbol + "**" ; break ;
            case 1 : row = "*" + firstSymbol + "--" + secondSymbol + "*" ; break ;
            case 2 : row = firstSymbol + "----" + secondSymbol ; break ;
            case 3 : row = "*" + firstSymbol + "--" + secondSymbol + "*" ; break ;
        }
        console.log(row);
        repeat++ ;
        if (repeat === 4) repeat = 0 ;
    }
    
    
}
PrintDNA (10) ;