function listOfProducts( inp ) {
    let sorted = inp.sort();
    for ( let i = 0 ; i < inp.length ; i++ ) {
        console.log( `${i+1}.${sorted[i]}` );
    }
    //console.log(sorted.join('\n'));
}
listOfProducts ( ["Potatoes", "Tomatoes", "Onions", "Apples"] ) ;