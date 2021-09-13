function equalNeighbors(inp) {
    let eq = 0 ;
    for ( i = 0 ; i < inp.length - 1 ; i ++ ) {
        let arr1 = inp[i]  ;
        let arr2 = inp[i+1];
        for ( j = 0 ; j < arr1.length ; j ++ ) {
            if ( arr1[j] === arr2[j] ) {
                eq++ ;
            }
        }
    }
    for ( i = 0 ; i < inp.length ; i ++ ) {
        let arr = inp[i] ;
        let len = arr.length ;
        for ( j = 0 ; j < len - 1 ; j++ ){
            if ( arr[j]  === arr[j+1]) {
                eq++;
            }
        }
    }
    console.log((eq));
}
equalNeighbors ( 
    [[2, 2, 5, 7, 4],
     [4, 0, 5, 3, 4],
     [2, 5, 5, 4, 2]] 
    ) ;
equalNeighbors ( 
[['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]
) ;
equalNeighbors ( 
[['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
)