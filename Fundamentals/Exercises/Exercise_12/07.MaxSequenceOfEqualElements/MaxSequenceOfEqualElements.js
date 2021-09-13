function MaxSequenceOfEqualElements(inp) {
    let isSequence = false ;
    let arrSeq = [] ;
    let arrCur = [] ;
    for ( let i = 0 ; i < inp.length-1; i ++) {
        if ( inp[i] === inp[i+1] ) {
            arrCur.push(inp[i]) ;
            isSequence = true ;
        } else if ( isSequence ) {
            arrCur.push(inp[i]) ;
            if ( arrCur.length > arrSeq.length )  {
                arrSeq = arrCur ;
            }
            arrCur = [] ;
            isSequence = false ;
        }
    }
        console.log(arrSeq.join(" "));
}
MaxSequenceOfEqualElements ( [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] ) ;