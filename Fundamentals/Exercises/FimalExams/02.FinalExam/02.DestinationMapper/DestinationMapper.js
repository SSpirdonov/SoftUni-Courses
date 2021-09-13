function destinationMapper( str ) {
    let patt_1 = /=([A-Z][A-Za-z]{2,})=|\/([A-Z][A-Za-z]{2,})\//g ;
    let patt_2 = /([A-Z][A-Za-z]{2,})|([A-Z][A-Za-z]{2,})/g ;
    let resStr = [] ;
    let resArr = str.match(patt_1) ;
    let travel_points = 0 ;
    if ( resArr === null ) {
        travel_points = 0 ;
        resStr = [] ;
    } else {
        resArr.forEach(el => {
            el = el.match(patt_2)[0] ;
            resStr.push(el) ;
            travel_points += el.length ;
        });
    }
    resStr = resStr.join(', ');
    console.log(`Destinations: ${resStr}`);
    console.log(`Travel Points: ${travel_points}`);
    T=1
}

destinationMapper ( '=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=' ) ;
//destinationMapper ( 'ThisIs some InvalidInput' ) ;