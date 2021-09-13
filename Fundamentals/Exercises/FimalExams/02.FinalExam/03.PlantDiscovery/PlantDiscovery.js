function plantDiscovery( inp ) {
    let n = Number(inp.shift());
    let plants = {} ;
    for (i=0 ; i < n; i++) {
        let [plantName, rarity ] = inp.shift().split('<->');
        if (plantName === undefined ) {
            console.log(`error`);
        } else {
            if( !Object.keys(plants).includes(plantName) ) {
                plants[plantName] = [ 0 , [] , 0 ];
            }
            plants[plantName][0] = Number(rarity) ;
        }
    }
    while ( ( command = inp.shift() ) !== "Exhibition" ) {
        let temp = command.split(': ');
        if ( temp[0] === undefined ) {
            console.log('error');
        } else {
            let comm = temp[0];
            let [ plant , p ] = temp[1].split(' - ');
            if ( plant === undefined  ){
                console.log('error');
            } else {
                if ( comm === 'Rate' ) {                
                    plants[plant][1].push(Number(p)) ;                                    
                } else if ( comm === 'Update' ) {
                    plants[plant][0] = Number(p);
                } else if ( comm === 'Reset' ) {
                    plants[plant][1] = [] ;
                } else {
                    console.log('error');
                }
            }
        }
    }
    console.log('Plants for the exhibition:');
    let sorted = Object.entries(plants) ;
    sorted.forEach( el => {
        let lrn = el[1][1] ;
        if ( el[1][1].length === 0  ) {
            el[1][2] = 0 ;
        } else {
            let tmp = el[1][1] ;
            let rating = el[1][1].reduce( (a,b) => a+b  ) ;
            rating = rating / el[1][1].length ;
            el[1][2] = rating ;
        }
    } );
    sorted.sort( (a,b) => b[1][0] - a[1][0] || b[1][2] - a[1][2] ) ;
    sorted.forEach ( el => {
        console.log(`- ${el[0]}; Rarity: ${el[1][0]}; Rating: ${el[1][2].toFixed(2)}`);
    } )
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])
