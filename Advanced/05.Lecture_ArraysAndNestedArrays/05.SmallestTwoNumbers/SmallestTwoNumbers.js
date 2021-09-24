function smallestTwoNumbers( inp ) {
    inp.sort( (a, b) => a - b ) ;
    console.log(inp[0] + ' ' + inp[1]);
}

smallestTwoNumbers( [30, 15, 50, 5] );
smallestTwoNumbers( [3, 0, 10, 4, 7, 3] );