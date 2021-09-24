function magicMatrices(inp) {
    let cLen = inp.length , rLen = inp[0].length ;
    let res = true;
    let sum = inp[0].reduce( (a, b) => a + b );
    for ( let i = 0 ; i < cLen ; i ++) {
        if( inp[i].reduce( (a, b) => a + b ) !== sum ) {
            res = false ;
            break;
        }
        let cSum = 0 ;
        for (let j = 0 ; j < cLen ; j ++) {
            cSum += inp[i][j] ;
        }
        if( cSum !== sum ) {
            res = false ;
            break;
        }
        
    }
    console.log(res);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
