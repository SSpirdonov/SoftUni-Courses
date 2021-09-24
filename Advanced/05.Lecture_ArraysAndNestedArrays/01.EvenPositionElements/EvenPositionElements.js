function evenPositionElements( inp ) {
    let res = '' ;
    for ( let i = 0 ; i < inp.length ; i ++ ) {
        if( i % 2 === 0 ) {
            res += inp[i] + ' ';
        }
    }
    console.log(res);
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);