function RadioCrystals(inp) {

    //Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

    let targetThickness = inp[0] ;
    for ( let i = 1 ; i < inp.length ; i++  ) {
        let chunkThickness = inp[i] ;
        let reduce = 0 ;
        console.log( `Processing chunk ${chunkThickness} microns` );
        if (isFinal(chunkThickness)) { continue ; }
        //--------------------- Cut------------------------------------------
        while ( chunkThickness/4 > targetThickness - 1 ) {
            chunkThickness = chunkThickness / 4 ;
            reduce ++ ;
        }
        chunkThickness = transpAndWash (chunkThickness) ;
        console.log(`Cut x${ reduce }`);
        reduce = 0 ;
        if (isFinal(chunkThickness)) { continue ; }
        // --------------------Lap--------------------------------------------
        while ( (chunkThickness - chunkThickness*0.2) > targetThickness - 1 ) {
            chunkThickness = chunkThickness - chunkThickness*0.2 ;
            chunkThickness = transpAndWash (chunkThickness) ;
            reduce ++ ;
        }
        console.log(`Lap x${ reduce }`);
        reduce = 0 ;
        if (isFinal(chunkThickness)) { continue ; }
        // --------------------Grind-----------------------------------------------
        while ( (chunkThickness - 20) > targetThickness - 1 ) {
            chunkThickness = chunkThickness - 20 ;
            chunkThickness = transpAndWash (chunkThickness) ;
            reduce ++ ;
        }
        console.log(`Grind x${ reduce }`);
        reduce = 0 ;        
        if (isFinal(chunkThickness)) { continue ; }
        // ---------------------Etch-----------------------------------------------
        while ( (chunkThickness - 2) > targetThickness - 1 ) {
            chunkThickness = chunkThickness - 2 ;
            chunkThickness = transpAndWash (chunkThickness) ;
            reduce ++ ;
        }
        console.log(`Etch x${ reduce }`);
        reduce = 0 ;
        if (isFinal(chunkThickness)) { continue ; }
        // ---------------------X-ray-----------------------------------------------
        if ( (chunkThickness ) < targetThickness ) {
            chunkThickness = chunkThickness + 1 ;
            console.log(`X-ray x1`);
        }        
        if (isFinal(chunkThickness)) { continue ; }
    }
    

    // -----------------------------FUNCTIONS----------------------------------------
    function isFinal(chunkThickness) {
        if ( chunkThickness !== targetThickness ) {
            return false ;
        } else {
            console.log(`Finished crystal ${ chunkThickness } microns`) ;
            return true ;
        }
    }
    
    function transpAndWash( chunkThickness ) { 
        result = Math.floor(chunkThickness) ;
        return result ;
    }
    // Functions end _______________________________________________________
}
RadioCrystals ( [1375, 50000 ]) ;
//RadioCrystals ( [1000, 4000 , 8100] ) ;