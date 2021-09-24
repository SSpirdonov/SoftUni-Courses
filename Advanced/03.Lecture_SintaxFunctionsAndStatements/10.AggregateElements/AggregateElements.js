function aggregateElements( inp ) {
    
    console.log(inp.reduce((a,b) => a += b));
    let str = inp.reduce((a,b) => a.toString().concat(b.toString()) );
    inp[0] = 1/inp[0] ;
    console.log(inp.reduce((a,b) => a += 1/b));
    console.log(str);

}

aggregateElements( [1, 2, 3] ) ;
aggregateElements( [2, 4, 8, 16] ) ;