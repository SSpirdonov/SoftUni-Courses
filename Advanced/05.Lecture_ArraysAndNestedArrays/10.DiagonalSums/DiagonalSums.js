function diagonalSums(inp) {
    let d1 = 0, d2 = 0 , len = inp.length ;
    for( let i = 0 ; i < len ; i++ ) {
        d1 += inp[i][i] ;
        d2 += inp[i][len-i-1] ;
    }
    console.log(d1 + ' ' + d2 );
}

diagonalSums([
  [20, 40],
  [10, 60],
]);

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
