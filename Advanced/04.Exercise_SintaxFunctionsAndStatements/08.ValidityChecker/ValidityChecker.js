function validityChecker( x1, y1, x2, y2 ) {
    let distance1 = Math.sqrt(Math.pow((0-x1),2) + Math.pow((0-y1),2)) ;
    let distance2 = Math.sqrt(Math.pow((x2-0),2) + Math.pow((y2-0),2)) ;
    let distance3 = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)) ;
    valid(x1,y1,0,0,distance1);
    valid(x2,y2,0,0,distance2);
    valid(x1,y1,x2,y2,distance3);

    function valid(x1,y1,x2,y2,dist) {
        if ( Number.isInteger(dist) ) {
            console.log( `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` );
        }else{
            console.log( `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid` );
        }
    }
}

validityChecker( 3, 0, 0, 4 );
validityChecker( 2, 1, 1, 1 );