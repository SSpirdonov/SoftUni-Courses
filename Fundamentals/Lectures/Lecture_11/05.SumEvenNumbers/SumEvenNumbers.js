function SumEvenNumbers(inp) {
    let li = inp.length - 1 // Last Index
    let sum = 0 ;
    for ( i = 0 ; i <= li ; i++  ) {
        let num = Number(inp[i]) ;
        if ( num %2 === 0  ) {
        sum += num ;
        }
    }
    console.log(sum);
}
SumEvenNumbers (['1','2','3','4','5','6']) ;
SumEvenNumbers (['3','5','7','9']) ;
SumEvenNumbers (['2','4','6','8','10']) ;