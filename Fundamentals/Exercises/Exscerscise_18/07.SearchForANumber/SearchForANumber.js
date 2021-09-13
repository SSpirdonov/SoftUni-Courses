function searchForANumber(dataArr , commArr ) {
    let searchArr = dataArr.slice( 0 , commArr[0] ) ;
    searchArr.splice( 0 , commArr[1] ) ;
    let num = commArr[2] ;
    let len = searchArr.length ;
    let occurrence = 0 ;
    for ( i = 0 ; i < len ; i ++ ) {
        if ( searchArr.includes(num) ) {
            occurrence ++ ;
            searchArr.splice(searchArr.indexOf(num) , 1 ) ;
        } else {
            break ;
        }
    }
    console.log( `"Number ${num} occurs ${ occurrence } times"` );
    //console.log( searchArr.join() );
}
searchForANumber ( [5, 2, 3, 4, 1, 6] , [5, 2, 3] ) ;