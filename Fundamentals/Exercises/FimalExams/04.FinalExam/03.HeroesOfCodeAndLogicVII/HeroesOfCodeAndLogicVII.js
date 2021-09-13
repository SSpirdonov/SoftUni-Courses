function heroesOfCodeAndLogicVII(inp) {
    let numerOfHeros = Number(inp.shift());
    let heroеs = {} ;
    while ( (comm = inp.shift()) !== 'End' ) {
        let typeOfCommand = comm.split(' ');
        if ( typeOfCommand[1] !== '-') {
            //----------------------------
            let [hName, hp, mp] = comm.split(' ') ;            
            if ( !Object.keys(heroеs).includes(hName) ) {
                heroеs[hName] = [] ;
                heroеs[hName][0] = 0 ;
                heroеs[hName][1] = 0 ;
            }
            heroеs[hName][0] += Number(hp);
            heroеs[hName][1] += Number(mp);
            if (heroеs[hName][0] > 100) heroеs[hName][0] = 100 ;
            if (heroеs[hName][1] > 200) heroеs[hName][1] = 200 ;
            //----------------------------
        } else {
            let [act, hName, p1 , p2] = comm.split(' - ') ;
            p1 = Number(p1) ;
            if (act === 'CastSpell') {
                if (heroеs[hName][1] >= p1) {
                    heroеs[hName][1] -= p1 ;
                    console.log(`${hName} has successfully cast ${p2} and now has ${heroеs[hName][1]} MP!`);
                } else {
                    console.log(`${hName} does not have enough MP to cast ${p2}!`);
                }
            } else if ( act === 'TakeDamage' ) {
                heroеs[hName][0] -= p1;
                if ( heroеs[hName][0] > 0  ) {
                    console.log(`${hName} was hit for ${p1} HP by ${p2} and now has ${heroеs[hName][0]} HP left!`);
                } else {
                    console.log(`${hName} has been killed by ${p2}!`);
                    delete heroеs[hName] ;
                }
            } else if ( act === 'Recharge' ) {
                let initMP = heroеs[hName][1] ;
                heroеs[hName][1] += p1;
                if ( heroеs[hName][1] > 200 ) {heroеs[hName][1] = 200} ;
                console.log(`${hName} recharged for ${heroеs[hName][1] - initMP} MP!`);
            } else if ( act === 'Heal'  ) {
                let initHP = heroеs[hName][0] ;
                heroеs[hName][0] += p1;
                if ( heroеs[hName][0] > 100 ) {heroеs[hName][0] = 100} ;
                console.log(`${hName} healed for ${heroеs[hName][0] - initHP} HP!`);
            }
        }
    }
    let sorted = Object.entries(heroеs).sort( ( a,b ) => (b[1][0] - a[1][0]) || a[0].localeCompare(b[0]) ) ;
    
    sorted.forEach( el => {
        console.log(el[0]);
        console.log('  HP: ' + el[1][0]);
        console.log('  MP: ' + el[1][1]);

    });
    T=1
}

// heroesOfCodeAndLogicVII(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);
heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ]);