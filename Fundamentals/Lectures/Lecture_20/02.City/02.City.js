function cityInfo(city) {
    let entries = Object.entries(city);
    for (let [ key, value ] of entries) {
        //console.log(`${key} -> ${value}`);
    }
    //console.log(entries[0]);
    let [ V1, V2] = entries[0];
    let L = entries[1][0];
    console.log( L) ;
    console.log(entries);
}


cityInfo( {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",

    } ) ;


