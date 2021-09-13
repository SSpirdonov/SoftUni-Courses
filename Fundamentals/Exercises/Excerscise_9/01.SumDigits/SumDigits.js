function SumDigits(num) {
    let numStr = num.toString();
    let n = 0 ;
    for ( i = 0 ; i < numStr.length ; i ++) {
        n += Number(numStr[i]) ;
    }
    console.log(n);
}
SumDigits(543) ;