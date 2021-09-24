function sumFirstLast( inp ) {
    let firstEl = Number(inp[0]);
    let lastEl  = Number(inp[inp.length - 1]);
    console.log(firstEl + lastEl);
}

sumFirstLast( ['20', '30', '40'] );
sumFirstLast( ['5', '10'] );
sumFirstLast( ['25'] );