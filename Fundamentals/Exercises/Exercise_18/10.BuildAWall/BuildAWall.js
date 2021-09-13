function buildAWall( inp ) {
    inp.map(Number) ;
    const cpd = 195 ;
    let isComplete = false ;
    let totalConcrete = 0 ;
    let curtDay = [] ;
    while ( !isComplete ) {
        
        let dayConcrete = 0 ;
        for ( let i = 0 ; i < inp.length ; i ++ ) {
            let concrete = 0 ;
            if ( inp[i] < 30 ) {
                concrete += cpd ;
                totalConcrete += cpd;
                inp[i] ++ ;
            }
            dayConcrete += concrete ;
        }
        if ( dayConcrete === 0  ) {
            isComplete = true ;
            break ;
        }
        curtDay.push(dayConcrete) ;
    }
    console.log(curtDay.join(', '));
    console.log( totalConcrete * 1900 + ' pesos');
}

//buildAWall ( [21, 25, 28] ) ;
//buildAWall ( [17] ) ;
buildAWall ( [17, 22, 17, 19, 17] ) ;