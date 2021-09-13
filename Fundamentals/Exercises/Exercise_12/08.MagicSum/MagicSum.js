function MagicSum(inp,num) {
    for ( i = 0 ; i < inp.length ; i ++ ) {
        for ( j = 0 ; j < inp.length ; j ++ ) {
            if ( ( j > i ) && ((inp[i] + inp[j]) === num )  ) {
                console.log(inp[i] + " " + inp[j] );
                
            }
        }    
    }
}
//MagicSum( [1, 7, 6, 2, 19, 23],8 ) ;
//MagicSum( [14, 20, 60, 13, 7, 19, 8],27 ) ;
MagicSum( [1, 2, 3, 4, 5, 6],6 ) ;