function melrahShake( inp ) {
    let str = inp.shift() ;
    inp = inp[0] ;
    let shake = false ;
    while ( !shake ) {
        let occ_1 = str.indexOf(inp) , occ_2 = str.lastIndexOf(inp) ;     
        if ( occ_1 === -1 || occ_2 === -1 || inp.length === 0 ) {
            console.log("No shake." );
            break;
        }
        let resStr = str.substring(0,occ_1);
        resStr += str.substring(occ_1 + inp.length, occ_2);     
        resStr += str.substring(occ_2 + inp.length) ;
        str = resStr ;
        console.log( "Shaked it.");
        let middle = Math.floor(inp.length / 2) ;
        inp = inp.split('');
        inp.splice( middle, 1 );
        inp = inp.join('') ;
    }

    console.log(str);
}

melrahShake ( ['astalavista baby' , 'sta']  ) ;
//melrahShake ( ['##mtm!!mm.mm*mtm.#' , 'mtm']  ) ;