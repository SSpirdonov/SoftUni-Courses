function ArrayRotation(inp , rotations) {
    let l = inp.length ;
    for ( i = 1 ; i <= rotations ; i ++) {
        let temp = inp[0] ;
            for ( j = 0 ; j < inp.length ; j ++) {
                inp[j]  = inp[j+1] ;
            }
        inp[inp.length-1] = temp ;
    }
    let resStr = inp.join(' ') ;
    console.log(resStr);
}
ArrayRotation([51, 47, 32, 61, 21], 2);
ArrayRotation([32, 21, 61, 1], 4) ;
ArrayRotation([2, 4, 15, 31], 5) ;