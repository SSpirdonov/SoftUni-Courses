function townPopulation(inp) {
    // създаваме празен обект за съхраняване на данните
    // we create an empty object for data storage
    const townObj = {} ;
    // завъртаме цикъл за четене на данните и ги наливаме в обекта
    // we rotate a cycle to read the data and pour it into the object
    inp.forEach(el => {
        let row = el.split(' <-> ') ;
        let townName = row[0] , townPopulation = Number(row[1]);
        if(townObj.hasOwnProperty(townName)) {
            townObj[townName] += townPopulation ;
        } else {
            townObj[townName] = townPopulation ;
        }
    });
    let arr = Object.entries(townObj) ;
    arr.forEach( el => {
        console.log(el[0] + ' : ' + el[1]);
    });
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

console.log('---------------------------------------');

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
