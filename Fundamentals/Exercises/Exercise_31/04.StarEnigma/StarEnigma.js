function starEnigma(inp) {
    let messNum = Number(inp.shift()) ;
    let pattern_1 = /s|t|a|r/gi ;
    let attackedPlanetsCount = 0 ;
    let destroyedPlanetsCount = 0 ;
    let attackedPlanets = [] ;
    let destroyedPlanets = [] ;
    //let regex = new RegExp('.*?(?:@)([A-Za-z]+).*?(?::)(\\d+).*?(?:!)(A|D)(?:!).*?(?:->)(\\d+)');
    //let regex = new RegExp('.*?@([A-Za-z]+).*?:(\\d+).*?!(A|D)!.*?->(\\d+)');
    //let regex = new RegExp('(?<g1>.*?)@(?<planet>[A-Za-z]+)(?<g2>.*?):(\\d+)(?<g3>.*?)!(?<attach>A|D)!(?<g4>.*?)->(\\d+)(?<real>(\\.\\d+)*)');
    //let regex = new RegExp('.*?@(?<planet>[A-Za-z]+)(?<g2>.*?):(\\d+)(?<g3>.*?)!(?<attack>A|D)!(?<g4>.*?)->(\\d+)');
    let regex = new RegExp('.*?@(?<planet>[A-Za-z]+)(?<g2>.*?):(\\d+)(?<g3>.*?)!(?<attack>A|D)!(?<g4>.*?)->(\\d+)');
    
    
    for ( let i = 0 ; i < messNum ; i ++ ) {
        let r = inp[i] ;
        let row = r.match(pattern_1) ;
        if (row !== null) {
            let count = row.length;
            r = r.split('').map( (a) => String.fromCharCode( a.charCodeAt(0) - count)).join('');
            let line = regex.exec(r,'g') ;
            if (line !== null) {
                let spr = (line.groups.g2 + line.groups.g3 + line.groups.g4).split('') ;
                if (!spr.includes('@') && !spr.includes('-') && !spr.includes('!') && 
                    !spr.includes(':') && !spr.includes('>')) {

                    if ( line.groups.attack === 'A' ) {
                        attackedPlanetsCount ++ ;
                        attackedPlanets.push(line.groups.planet)
                    } else {
                        destroyedPlanetsCount ++ ;
                        destroyedPlanets.push(line.groups.planet)
                    }
                }                   
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanetsCount}`);
    attackedPlanets.sort( (a , b) => a.localeCompare(b) ) ;
    attackedPlanets.forEach( el =>{
        console.log('-> ' + el);
    } )
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    destroyedPlanets.sort( (a , b) => a.localeCompare(b) ) ;
    destroyedPlanets.forEach( el =>{
        console.log('-> ' + el);
    } )
}

// starEnigma(["2",
//     "STCDoghudd4=63333$D$0A53333",
//     "EHfsytsnhf?8555&I&2C9555SR"
// ]);


starEnigma(["3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR"
]);