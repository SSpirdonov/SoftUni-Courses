function TriangleOfNumbers(n) {
    let resStr = "" ;
    for ( i = 1 ; i <= n ; i++ ) {
        for ( j = 1 ; j <= i ; j++ ) {
            resStr += i + " " ;
        }
        console.log(resStr.trim());
        resStr = "";
    }
}
TriangleOfNumbers(5);