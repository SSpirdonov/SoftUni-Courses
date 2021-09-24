function processOddPositions( inp ) {
    let len = inp.length , arr = [];
    for ( let i = 1 ; i < len; i+=2) {
        arr.push(inp[i]*2);
    }
    let resArr = [];
    for ( let i = len - 1 ; i >= 0 ; i-- ) {
        resArr.push(arr[i]) ;
    }
    console.log(resArr.join(' ').trim());
}
processOddPositions( [10, 15, 20, 25] );
processOddPositions( [3, 0, 10, 4, 7, 3] );