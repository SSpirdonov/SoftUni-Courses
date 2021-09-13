function nxnMatrix(num) {
    
    for ( let i = 1 ; i <= num ; i ++ ) {
        let res = [] ;
        for ( let j = 1 ; j <= num ; j ++ ) {
            res.push(num) ;
        } 
        console.log( res.join(" ") );   
    }
}
nxnMatrix( 2 ) ;