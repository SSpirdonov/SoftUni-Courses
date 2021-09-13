function train( inp ) {
    let arrWagons = inp.shift().split(' ').map(Number) ;
    let limit = Number(inp.shift()) ;
    inp = inp.map(a=>a.split(' ')) ;
    for ( let element of inp ) {
        if ( element[0] === 'Add' ) {
            arrWagons.push( Number(element[1]) ) ;
        } else {
            let passToAdd = Number(element[0]) ;
            for ( j = 0 ; j < arrWagons.length; j ++ ) {
                if ( (passToAdd + arrWagons[j] <= limit) ) {
                    arrWagons[j] += passToAdd ;
                    break ;
                }
            }
        }
    }

    console.log(arrWagons.join(' '));
    
}

train ( ['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'] ) ;

// train ( ['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75'] ) ;