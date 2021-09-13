function MergeArrays(inp1 , inp2) {
    let resArr = [] ;
    for ( i = 0 ; i < inp1.length ; i ++ ) {
        if ( i % 2 === 0 ) {
            resArr.push( Number(inp1[i]) + Number(inp2[i]) ) ;
        } else {
            resArr.push( inp1[i] +inp2[i] ) ;
        }
    }
    let resStr = resArr.join(' - ') ;
    console.log(resStr) ;
}

MergeArrays ( ['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'] ) ;
MergeArrays ( ['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'] ) ;