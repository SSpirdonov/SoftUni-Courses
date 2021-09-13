function BitcoinMining(inp) {
    let bcoinPrice = 11949.16 ;
    let goldPrice  =    67.51 ;
    let firstDayBc =        0 ;
    let day = false ;
    let step = 0 ;
    let bcoinNumb = 0 ;
    let totalMoney = 0;
    for ( let i = 0 ; i < inp.length ; i ++ ) {
        step++ ;
        let minedGold   = Number(inp[i]) ;
        let bcoinDay = 0 ;
        if ( step % 3 === 0 ) { minedGold -= minedGold*0.3 ; }
        let moneyInDay  = minedGold * goldPrice ; 
        totalMoney += moneyInDay ;
        if ( totalMoney >= bcoinPrice ) {
            bcoinDay += Math.floor( totalMoney / bcoinPrice ) ;
            totalMoney = totalMoney - bcoinDay*bcoinPrice  ;
        }
        bcoinNumb += bcoinDay ;
        if ( !day ) {
            if ( bcoinDay > 0 ) {
                firstDayBc = step ;
                day = true;
            }
        }

        // console.log(bcoinNumb , minedGold, totalMoney);
    }
    console.log( `Bought bitcoins: ${bcoinNumb}` );
    if ( day ) console.log( `Day of the first purchased bitcoin: ${firstDayBc}` );
    console.log( `Left money: ${totalMoney.toFixed(2)} lv.` );

}
//BitcoinMining( [100,200,300] ) ;
//BitcoinMining( [50,100] ) ;
BitcoinMining([3124.15, 504.212, 2511.124] ) ;