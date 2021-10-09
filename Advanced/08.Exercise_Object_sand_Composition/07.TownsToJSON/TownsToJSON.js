function townsToJSON( inp ) {
    const result = [] ;
    
    const [town, latitude, longitude] = inp[0].slice(2,-2).split(' | ') ;
    T=1
    for ( let i = 1 ; i < inp.length ; i++ ) {
        const obj = {} ;
        let [ currentTown, curreentLatidude, currentLongitude ] = inp[i].slice(2,-2).split(' | ') ;
        obj[town] = currentTown ;
        obj[latitude] = Number(Number(curreentLatidude).toFixed(2)) ;
        obj[longitude] = Number(Number(currentLongitude).toFixed(2)) ;
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
