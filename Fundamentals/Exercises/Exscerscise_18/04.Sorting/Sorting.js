function sorting( inp ) {
    inp.sort( (a,b)  => b - a) ;
    let resArr = [] ;
    let len = inp.length ;
    for ( i = 0 ; i < len ; i++ ) {
        resArr.push(inp.shift()) ;
        resArr.push(inp.pop()) ;
    }
    console.log(resArr.join(' '));
}
sorting( [1, 21, 3, 52, 69, 63, 31, 2, 18, 94]  ) ;