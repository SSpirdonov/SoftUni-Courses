function biggerHalf( inp ) {
    inp.sort( ( a, b ) => a - b) ;
    let len = inp.length ;
    let firstIndex = Math.floor(len/2);
    let arr = [] ;
    for ( let i = firstIndex ; i < len ; i ++ ) {
        arr.push(inp[i]);
    }
    //console.log(arr);
    return arr;
}


console.log( biggerHalf ([4, 7, 2, 5]));
//biggerHalf ([4, 7, 2, 5]);
console.log(biggerHalf ([3, 19, 14, 7, 2, 19, 6]));