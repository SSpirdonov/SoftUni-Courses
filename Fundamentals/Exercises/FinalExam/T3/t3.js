function t3(inp) {
    let animals = {} ;
    let areas = [] ;
    while ( ( command = inp.shift() ) !== 'EndDay' ) {
        let [ act, row ] = command.split(': ') ;
        let [ name, food, area] = row.split('-'); 
        food = Number(food) ;
        if ( act === 'Add' ) {
            if (!Object.keys(animals).includes(name) ) {
                animals[name] = [] ;
                animals[name][0] = 0 ;
                animals[name][1] = '' ;
                animals[name][2] = 0 ;

            }
            animals[name][0] += food  ;
            animals[name][1] = area   ;
            
        } else if ( act === 'Feed' ) {
            if (Object.keys(animals).includes(name) ) {
                animals[name][0] -= food  ;
                if (animals[name][0] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name] ;
                }
            }                
        }
    }
    let arrS = {}
    sor = Object.entries(animals).sort( (a,b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0])  );
    console.log(`Animals:`);
    sor.forEach(el => {
        if (!Object.keys(arrS).includes(el[1][1])) {
            arrS[el[1][1]] = 0 ;
        }
        arrS[el[1][1]]++ ;
        console.log(' ' + el[0] + ' -> ' + el[1][0] + 'g');
        areas.push(el[1][1]);

    });

    let arrSorted = Object.entries(arrS).sort( ( a,b) => b[1]-a[1] || a[0].localeCompare(b[0]) ) ;

    console.log(`Areas with hungry animals:`);

    arrSorted.forEach( el => {
        console.log(`${el[0]}: ${el[1]}` );
    } )
}
t3(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);

// t3(["Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"
// ]);

// t3(["Add: Bonie-3490-RiverArea",
//     "Add: Sam-5430-DeepWoodsArea",
//     "Add: Bonie-200-RiverArea",
//     "Add: Maya-4560-ByTheCreek",
//     "Feed: Maya-2390",
//     "Feed: Bonie-3500",
//     "Feed: Johny-3400",
//     "Feed: Sam-5500",
//     "EndDay"
// ]);