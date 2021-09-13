function solve( inp ) {
    let map = new Map();
    let inArr = inp.shift().split(' ') ;

    for ( let word of inArr ) {
        //let word = strToCheck;
        let quantity = 0 ;
        map.set(word,quantity) ;
        let occurances = 0 ;
        for ( let i = 0 ; i < inp.length ; i++ ) {
            if ( word === inp[i] ) { occurances ++ ; }
        }
        map.set(word , occurances) ;
    }
    let sorted = Array.from(map).sort( (a,b) => { b[1] - a[1] } ) ;
    for ( let el of sorted ) {
        console.log(el[0] + ' - ' + el[1]);
    } 
}
solve ( [
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ] ) ;