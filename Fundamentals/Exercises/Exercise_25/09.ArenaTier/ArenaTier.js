function arenaTier(inp) {
    let tier = {}
    let index = 0 ;
    while ( inp[index] !== "Ave Cesar" ) {
        let row = inp[index].split(' ') ;
        if ( row[1] === '->' ) {            // add skills
            let [gName, skill, points] = inp[index].split(' -> ') ;
            
            if ( !Object.keys(tier).includes(gName) ) {
                tier[gName] = {}
            }
            if ( !Object.keys(tier[gName]).includes(skill) ) {
                tier[gName][skill] = Number(points) ;
            }
            if ( tier[gName][skill] < Number(points) ) {
                tier[gName][skill] = Number(points) ;
            }

        } else if ( row[1] === 'vs' ) {     // battle
           let [ gladiator_1 , gladiator_2] = inp[index].split(' vs ') ;
           if ( Object.keys(tier).includes(gladiator_1) && Object.keys(tier).includes(gladiator_2) ) {
                let g1 = Object.entries(tier[gladiator_1]);
                let g2 = Object.entries(tier[gladiator_2]);
                let isBattle = false ;
                g1.forEach( el1 => {
                    g2.forEach( el2 => {
                        if ( el1[0] === el2[0] ) {
                            isBattle = true ;
                        }
                    } );
                } );
                if ( isBattle ) {
                    g1Points = Object.values(tier[gladiator_1]).reduce( ( a, b) => a + b ) ;
                    g2Points = Object.values(tier[gladiator_2]).reduce( ( a, b) => a + b ) ;
                    
                    if ( g1Points > g2Points ) {
                        delete tier[gladiator_2] ;
                    } else if (g1Points < g2Points) {
                        delete tier[gladiator_1] ;
                    }
                }    
           }
        }
        index++ ;        
    }
    
    let sorted = Object.entries(tier);
    sorted.forEach ( el => {        
        let points = Object.values(el[1]).reduce( ( a, b) => a + b ) ;
        el.push(points);
    } ) ;

    sorted.sort( ( a, b ) => b[2]- a[2] || a[0].localeCompare(b[0]) ) ;
    sorted.forEach( el => {
        console.log(el[0] + ': ' + el[2] + ' skill' );
        let inArr = Object.entries(el[1]).sort( (a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        inArr.forEach( inEl => {
            console.log(`- ${inEl[0]} <!> ${inEl[1]}`);
        } ) ;

    });
}

// arenaTier([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Tiger -> 250",
//   "Ave Cesar",
// ]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
