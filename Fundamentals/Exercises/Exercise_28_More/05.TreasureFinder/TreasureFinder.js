function treasureFinder(inp) {
let keySeq = inp.shift().split(' ').map(Number) ;
    for ( i = 0 ; i < inp.length ; i ++ ) {
        if ( inp[i] === 'find' ) break ;
        let currString = inp[i] ;
        let index = 0 ;
        let modString = [] ;
        for ( j = 0 ; j < currString.length ; j ++ ) {
            modString.push(String.fromCharCode(currString[j].charCodeAt(0) - keySeq[index])) ;
            index ++ ;
            if ( index === keySeq.length ) index = 0 ;
        }
        modString = modString.join('');
        let t1 = modString.indexOf('&') + 1  ,  t2 = modString.indexOf('&' , t1) ;
        let c1 = modString.indexOf('<') + 1  ,  c2 = modString.indexOf('>' , c1) ;
        console.log( `Found ${modString.substring(t1,t2)} at ${modString.substring(c1,c2)}` );    
    }
}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"
]);