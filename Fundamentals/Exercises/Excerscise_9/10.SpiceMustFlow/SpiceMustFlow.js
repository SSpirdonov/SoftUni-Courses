function SpiceMustFlow(yield) {
    
    
    let days = 0 , totalSpice = 0 ;
    do {
        days++ ;
        totalSpice += yield ;
        if ( yield >=26 ) totalSpice -= 26 ;
        else totalSpice = 0 ;
        yield -= 10 ;
    } while ( yield >= 100)
    if ( yield >=26 ) totalSpice -= 26 ;
    else totalSpice = 0 ;
    
    console.log(days);
    console.log(totalSpice);

}
SpiceMustFlow(111);