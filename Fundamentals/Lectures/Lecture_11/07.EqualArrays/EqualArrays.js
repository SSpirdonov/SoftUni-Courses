function EqualArrays(inp1,  inp2) {
    let sum = 0 ;
    for ( i = 0 ; i < inp1.length ; i ++ ) {
        if ( Number(inp1[i]) !== Number(inp2[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return ;
        } else {
            sum += Number(inp1[i]) ;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
EqualArrays( ['10','20','30'], ['10','20','30'] ) ;
EqualArrays( ['1','2','3','4','5'], ['1','2','4','4','5'] ) ;
EqualArrays( ['1'], ['10'] ) ;