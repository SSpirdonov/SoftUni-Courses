function ThePyramidOfKingDjoser(a1 , a2) {
    let base = Number(a1) ;
    let increment = Number(a2) ;
    let step = 0 ;
    let stoneBlocks = 0 , totalStone  = 0 ;
    let marbleBlocks= 0 , totalMarble = 0 ;
    let lapisLazuli = 0 , totalLapis  = 0 ; 
    let goldBlocks  = 0 , height      = 0 ; 
    for ( i = base ; i > 0 ; i -= 2 ) {
        step ++ ; height += increment ;
        if ( i <= 1 ) { goldBlocks = 1 ; }
        else          { goldBlocks = i*2 ; }
        stoneBlocks = (i-2)*(i-2)*increment ; totalStone += stoneBlocks ;
        if ( step === 5 ) { lapisLazuli = i*i*increment - stoneBlocks ; totalLapis  += lapisLazuli  ; step = 0 ; }
        else              { marbleBlocks= i*i*increment - stoneBlocks ; totalMarble += marbleBlocks ; } 
    }
    console.log( `Stone required: ${ Math.ceil(totalStone) }` );
    console.log( `Marble required: ${ Math.ceil(totalMarble) }` );
    console.log( `Lapis Lazuli required: ${ Math.ceil(totalLapis) }` );
    console.log( `Gold required: ${ goldBlocks }` );
    console.log( `Final pyramid height: ${ Math.floor(height) }` );

}
//ThePyramidOfKingDjoser( 3 , 1 ) ;
ThePyramidOfKingDjoser( 11 , 0.75 ) ;