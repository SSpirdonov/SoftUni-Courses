function argumentInfo(...params) {
    let typesArr = {};
    params.forEach(el => {
        type = typeof el;
        value = el;  
        if(!typesArr.hasOwnProperty(type)) {
            typesArr[type] = 1;
        } else {
            typesArr[type] += 1;
        }

        console.log(`${type}: ${value}`);
    });
    let resArr = Object.entries(typesArr).sort( (a, b) => b[1] - a[1] );
    resArr.forEach( el => {
        console.log(`${el[0]} = ${el[1]}`);
    } );    
}
argumentInfo('cat', 42, function () { console.log('Hello world!');} ,{lam: 1}, [5,6]);
//argumentInfo({lam: 1}, [5,6]);