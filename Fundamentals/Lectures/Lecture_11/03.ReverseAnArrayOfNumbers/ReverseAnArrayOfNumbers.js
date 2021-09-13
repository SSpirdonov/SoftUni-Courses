function ReverseAnArrayOfNumbers(n, inp) {
    
    let arr = [] ;
    for (  let i = n-1 ; i >= 0 ; i-- ) {
        arr.push(inp[i]);
    }
    let res = arr.join(' ') ;
    console.log(res.trim());
}
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
ReverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
ReverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);