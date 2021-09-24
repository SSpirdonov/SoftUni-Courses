function circleArea( inp ) {
    let inpType = typeof(inp) ;
    let res ;
    if ( inpType === 'number' ) {
        console.log((Math.pow(inp, 2)*Math.PI).toFixed(2)); 
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inpType}.`);
    }
    console.log(inpType);
}
circleArea(5);
circleArea('name');