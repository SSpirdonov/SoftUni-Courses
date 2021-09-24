function squareOfStars( a ) {
    if ( a === undefined) a = 5;
    
    for (let i = 1 ; i <= a ; i ++) {
        let outStr = '' ;
        for ( let j = 1 ; j <= a ; j ++ ) {
            outStr += '*' ;
        }
        console.log(outStr);   
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();