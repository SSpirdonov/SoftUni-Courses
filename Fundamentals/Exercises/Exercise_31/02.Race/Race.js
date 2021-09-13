function race( inp ) {
    let list = inp.shift().split(', ');
    let reg_1 = /[A-Za-z]/g ;
    let reg_2 = /\d/g ;
    let finalList = {} ;
    while ( ( row = inp.shift() ) !== "end of race" ) {
        let name = row.match(reg_1).join('') ;
        let dist = row.match(reg_2).map(Number).reduce( (a,b) => a+b ) ;
        if ( !list.includes(name) ) continue ;
        if ( !Object.keys(finalList).includes(name) ) {
            finalList[name] = 0 ;
        }
        finalList[name] +=  dist;
    }
    let arr = Object.entries(finalList).sort( (a,b) => b[1]-a[1] );
    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`);
    console.log(`3rd place: ${arr[2][0]}`);
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
])