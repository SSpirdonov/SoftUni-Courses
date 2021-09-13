function RadioCrystals(inp) {
    //Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
    let targetThick = inp[0] ;
    let chunkThick  = inp[1];
    for ( let i = 1 ; i < inp.length ; i++  ) {
        chunkThick = inp[i] ;
        console.log( `Processing chunk ${chunkThick} microns` );
        while (chunkThick > targetThick ) {
            let aftCutTick   =  chunkThick / 4  ;                
            let aftLapTick   =  chunkThick - chunkThick*0.2 ;    
            let aftGrindTick =  chunkThick - 20 ;                
            let aftEtchTick  =  chunkThick -  2 ;                
            let operation = opr(aftCutTick, aftLapTick, aftGrindTick, aftEtchTick) ;    
            
            switch (operation) {
                case "Cut"    : {
                    cutFunc() ;
                } break ;
                case "Lap"    : {
                    lapFunc() ; 
                }break ;
                case "Grind"  : {
                    grindFunc(); 
                }break ;
                case "Etch"   : {
                    etchFunc() ; 
                }break ;
               // case "End"    :  break ;
            }
            if ( isFinal(chunkThick) ) { continue } ;
        
            if ( (chunkThick ) < targetThick ) {
                chunkThick = chunkThick + 1 ;
                console.log(`X-ray x1`);
            }        
            if (isFinal(chunkThick)) { continue ; 
            }
            //break;
        }    
    }
//--------------------------------FUNCTIONS-----------------------------------------------------------------
function opr( o1, o2 , o3 , o4 ) {
    let compArr = [o1,o2,o3,o4] ;
    let min = compArr.sort(function(a, b){return a-b});
    let minNum = 0 ;
    for ( let i = 0 ; i < min.length ; i ++) {
        if ( min[i]  >=  targetThick) {
            minNum =  min[i] ;
            break ;
        }
    }
    switch ( minNum  ) {
        case o1 : return "Cut" ;
        case o2 : return "Lap" ;
        case o3 : return "Grind" ;
        case o4 : return "Etch" ;
        //default : "End" ; break ;
    }
    

}
//------------------------GutFunction------------------------------
function cutFunc() {
    let reduce = 0 ;
    while ( chunkThick/4 >= targetThick ) {
        chunkThick = chunkThick / 4 ;
        reduce ++ ;
    }
    chunkThick = transpAndWash () ;
    console.log(`Cut x${ reduce }`);  
    console.log("Transporting and washing");  
}
//------------------------LapFunction------------------------------
function lapFunc() {
    let reduce = 0 ;
    while ( (chunkThick - chunkThick*0.2) > targetThick ) {
        chunkThick = chunkThick - chunkThick*0.2 ;
        chunkThick = transpAndWash (chunkThick) ;
        reduce ++ ;
    }
    chunkThick = transpAndWash () ;
    console.log(`Lap x${ reduce }`);
    console.log("Transporting and washing");
}
//------------------------GrindFunction----------------------------
function grindFunc() {  
    let reduce = 0 ;
    while ( (chunkThick - 20) > targetThick ) {
        chunkThick = chunkThick - 20 ;
        chunkThick = transpAndWash (chunkThick) ;
        reduce ++ ;
    }
    chunkThick = transpAndWash () ;
    console.log(`Grind x${ reduce }`);
    console.log("Transporting and washing");
}
//------------------------EtchFunction-----------------------------
function etchFunc() {
    let reduce = 0 ;
    while ( (chunkThick) > targetThick) {
        chunkThick = chunkThick - 2 ;
        chunkThick = transpAndWash (chunkThick) ;
        reduce ++ ;
    }
    chunkThick = transpAndWash () ;
    console.log(`Etch x${ reduce }`);
    console.log("Transporting and washing");
}
//------------------------transpAndWash----------------------------
function transpAndWash() { 
    return Math.floor(chunkThick) ;
    
}
//------------------------isFinal----------------------------------
function isFinal() {
    if ( chunkThick !== targetThick ) {
        return false ;
    } else {
        console.log(`Finished crystal ${ chunkThick } microns`) ;
        return true ;
    }
}
}

//RadioCrystals ( [1375, 50000 ]) ;
RadioCrystals ( [1000, 4000 , 8100] ) ;
