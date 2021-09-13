function Ladybugs(inp) {
    let fieldSize = Number(inp[0]);
    let bugFields = inp[1].split(' ');
    let initField = [] ;
    for ( let i = 0 ; i < fieldSize ; i ++ ) {
        initField.push(0);
    }
    for ( let i = 0 ; i < bugFields.length ; i++ ) {
        let isBug = Number(bugFields[i]) ;
        if ( isBug >= 0 && isBug < fieldSize ) {
            initField[isBug] = 1 ;        
        }
    }
    for ( let j = 2 ; j < inp.length ; j++  ) {
       
        let commandArr = inp[j].split(' ') ;
        let position   = Number(commandArr[0]) ;
        let dest       = commandArr[1] ; 
        let moving     = Number(commandArr[2]) ;
        if ( moving < 0 ) {
            moving = Math.abs(moving) ;
            if ( dest === "right" ) {
                dest === "left" ;
            } else if ( dest === "left") {
                dest = "right" ;
            }
        }
        if ( position >= 0 && position < fieldSize && moving !== 0 && initField[position] === 1 ) {
            
            if ( dest === "right" ) {
                let newPosition = position + moving ;
                for ( let i = newPosition ; i < fieldSize ; i ++ ) {
                    
                    if ( newPosition < fieldSize && initField[newPosition] === 0 ) {
                        initField[newPosition] = 1 ;
                        initField[position] = 0 ;
                        break ;
                    } else {
                        newPosition ++;
                        initField[position] = 0 ;
                    }
                }

            } else if ( dest === "left") {
                let newPosition = position - moving ;
                for ( let i = position ; i > 0 ; i -- ) {      
                    if ( newPosition > 0 && initField[newPosition] === 0 ) {
                        initField[newPosition] = 1 ;
                        initField[position] = 0 ;
                        break ;
                    } else {
                        newPosition -- ;
                        initField[position] = 0 ;
                    }
                }
            }
            initField[position] = 0 ;
        }
        let k = 1 ;
    } // end for j
    
    console.log( initField.join(' ') );
}
Ladybugs ( [ 3, "0 2","0 right 1","2 right 1" ] ) ;
// Ladybugs ( [ 3, "0 1 2","0 right 1","1 right 1","2 right 1"] ) ;
// Ladybugs ( [ 5, "3","3 left 2","1 left -2"] ) ;