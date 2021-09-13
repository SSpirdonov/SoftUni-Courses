function heartDelivery( inp ) {
    let neighArr = inp.shift().split('@').map(Number) ;
    let len = neighArr.length ;
    let currPos = 0 ;
    let lastPos = 0 ;
    let k =  1 ;
    for ( i = 0 ; i < inp.length ; i ++ ) {
        if ( inp[i] === 'Love!' )  break ;
        let command = inp[i].split( ' ' ) ;       
        let jump = Number(command[1]) ;
        if ( currPos + jump < len ) {
            currPos = currPos + jump ;
        } else {
            currPos = 0 ;
        }
        lastPos = currPos ;
        if ( neighArr[currPos] === 0  ) {
            console.log( `Place ${currPos} already had Valentine's day.` );
        } else {
            neighArr[currPos] -= 2 ; 
            if ( neighArr[currPos] === 0  ) {
                console.log( `Place ${currPos} has Valentine's day.` );
            }
        }    
    }
    console.log( `Cupid's last position was ${lastPos}.` );
    let failed = 0 ;
    for ( i = 0 ; i < len ; i ++ ) {
        if ( neighArr[i]  > 0 ) {
            failed++;
        }
    }
    if ( failed === 0 ) {
        console.log( `Mission was successful.` );
    } else {
        console.log( `Cupid has failed ${failed} places.` );
    }
    
}

// heartDelivery( [ '10@10@10@2','Jump 1','Jump 2','Love!'] ) ;
heartDelivery( [ '2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
     ] ) ;