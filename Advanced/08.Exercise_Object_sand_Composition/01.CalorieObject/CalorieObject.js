function calorieObject( inp ) {
    const obj = {} ;
    for( i = 0 ; i< inp.length ; i+=2) {
        obj[inp[i]] = Number(inp[i+1]) ;
    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);