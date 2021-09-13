function Rounding(num , precision) {
    
    if ( precision > 15 ) precision = 15 ;
    num = parseFloat(num.toFixed(precision)) ;
    console.log(num);
}
Rounding(3.1415926535897932384626433832795,2) ;
Rounding(10.5,3) ;