function extractIncreasingSubsequenceFromArray(inp) {
    
    const res = [];
    let biggest = Number.MIN_SAFE_INTEGER;
     
    inp.reduce((accumulated, current) => {
    if (current >= biggest) {
        biggest = current;
        accumulated.push(current);
        } 
        return accumulated;
    },res) ;
     
    // console.log(res.join());
    return res;
}

//extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
//extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
