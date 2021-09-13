function carWash( inp ) {
    let len = inp.length ;
    let value = 0 ;
    for  ( i = 0 ; i < len ; i++ ) {
        let cleanMethod = inp[i] ;
        switch ( cleanMethod ) {
            case "soap"           : value += 10           ; break ;
            case "water"          : value += value * 0.20 ; break ;
            case "vacuum cleaner" : value += value * 0.25 ; break ;
            case "mud"            : value -= value * 0.10 ; break ;
        }
    }
    console.log(`The car is ${ value.toFixed(2) }% clean.`);
}
carWash ( ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'] ) ;