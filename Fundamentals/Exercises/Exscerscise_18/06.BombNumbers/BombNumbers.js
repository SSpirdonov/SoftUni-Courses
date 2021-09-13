function bombNumbers( seqArr , comArr ) {
    let bomb = comArr[0] , power = comArr[1] ;
    let len = seqArr.length ;
    if ( !seqArr.includes(bomb) ) {
        console.log( sumElArr(seqArr) );
        return ;
    }

    for ( i = 0 ; i < len ; i ++ ) {
        if ( !seqArr.includes(bomb) ) { break ; }
        let bPos = seqArr.indexOf(bomb) ;
        let firstDetIndex , detLength;
        
        if ( bPos - power >= 0 ) {
            firstDetIndex = bPos - power ;
        } else {
            firstDetIndex = 0 ;
        }

        if ( bPos + power < seqArr.length) {
            detLength = 2*power +1 ;
        } else {
            detLength = seqArr.length - 1 ;
        }

        seqArr.splice( firstDetIndex , detLength );
        //console.log(bPos);
    }
    console.log( sumElArr( seqArr ) );


    //---------------------FUNCTIONS-------------------------------    
    function sumElArr(inp) {
        let sum = 0 ;
        for ( let element of inp ) {
            sum += element ;
        }
        return sum ;
    }
    //--------------------------------------------------------------    

}
bombNumbers ( [1, 2, 2, 4, 2, 2, 2, 9],[4, 2] ) ;
bombNumbers ( [1, 4, 4, 2, 8, 9, 1],[9, 3] ) ;
bombNumbers ( [1, 7, 7, 1, 2, 3], [7, 1]) ;
bombNumbers ( [1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1] ) ;