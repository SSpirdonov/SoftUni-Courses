function daysInaMonth(m, y ) {
    let list = [31,28,31,30,31,30,31,31,30,31,30,31] ;
    if ( m !== 2 ) {
        console.log(list[m-1]);
    } else {
        if ( (y % 4 === 0 && y % 100 !== 0 ) || ( y % 400 === 0 )) {
            console.log(29);
        } else {
            console.log(28);
        }
    }
}
daysInaMonth( 1, 2012 );
daysInaMonth( 2, 2020 );