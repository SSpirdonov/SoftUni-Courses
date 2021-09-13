function bunnyKill( inp ) {
    let coordArr = inp.pop().split(' ') ;
    let dataArr = [] ; 
    let rowLen  =  0 ;
    for ( let i = 0 ; i < inp.length ; i ++ ) {
        let rowArr = inp[i].split(' ').map(Number) ;
        dataArr.push(rowArr) ;
        rowLen = rowArr.length - 1 ;
        console.log(rowArr.join());
    }
    let xLeftBorder  = 0 , xRightBorder = rowLen ;
    let yTopBorder   = 0 , yDownBorder  = inp.length  - 1 ;

    for ( let i = 0 ; i < coordArr.length ; i ++ ) {
        let xyz = coordArr[i].split(' ');
        let xy = xyz[0].split(',').map(Number) ;       
        let x = xy[0] ;
        let y = xy[1] ;
        for ( j = -1 ; j <= 1 ; j++) {
            for ( k = -1 ; k <= 1 ; k++) {
                if ( ! (j === 0 && k === 0)) {    
                    

                    console.log( j,k );
                }
            }
        }

        console.log( 'x= ' + x + '   y= ' + y );
    }
    console.log(coordArr);
}

bunnyKill ( 
['5 10 15 20',
 '10 10 10 10',
 '10 15 10 10',
 '10 10 10 10',
 '2,2 0,1']
) ;