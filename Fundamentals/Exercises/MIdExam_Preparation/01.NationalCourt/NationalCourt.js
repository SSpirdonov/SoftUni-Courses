function nationalCourt( inp ) {
    let e1 = Number(inp[0]);
    let e2 = Number(inp[1]);
    let e3 = Number(inp[2]);
    let pCount = Number(inp[3]);
    let pProceed = 0 ;
    let hours = 0 ;
    let ready = false ;
    while ( pProceed < pCount  ) {
        for ( let i = 1 ; i < 4 ; i ++ ) {
            pProceed += ( e1 + e2 + e3 ) ;
            hours ++ ;
            if ( pProceed >= pCount ) { 
                ready = true ;
                break ;
            }    
        }
        if ( !ready ) {
            hours ++ ;
        }
    }
    console.log( `Time needed: ${hours}h.` );
}

nationalCourt ( [5 , 6 ,  4 , 20] ) ;
nationalCourt ( [1 , 2 ,  3 , 45] ) ;
nationalCourt ( [3 , 2 ,  5 , 40] ) ;