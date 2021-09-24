function largestNumber( a1, a2, a3 ) {
    let arr = [];
    arr.push(a1), arr.push(a2), arr.push(a3) ;
    arr.sort( (a,b) => b-a);

    console.log(`The largest number is ${arr[0]}.`);
}

largestNumber( 5, -3, 16 );
largestNumber( -3, -5, -22.5 );