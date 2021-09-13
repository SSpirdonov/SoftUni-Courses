function distinctArray( inp ) {
    let resArr = [] ;
    let l = inp.length ;
    for ( let i = 0 ; i < l ; i ++) {
        let num = inp.shift() ;
        resArr.push(num) ;
        inp = inp.filter(a=> a !== num) ;
    }
    console.log(resArr.join(' '));
}

//distinctArray ( [7, 8, 9, 7, 2, 3, 4, 1, 2] ) ;
//distinctArray ( [20, 8, 12, 13, 4, 4, 8, 5] ) ;
distinctArray ( [1, 2, 3, 4] ) ;