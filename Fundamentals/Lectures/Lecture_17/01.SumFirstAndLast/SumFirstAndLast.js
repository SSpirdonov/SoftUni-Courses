function sumFirstAndLast(inp) {
    console.log( inp.map(Number).shift() + inp.map(Number).pop() );
}
sumFirstAndLast ( ['5', '10'] ) ;