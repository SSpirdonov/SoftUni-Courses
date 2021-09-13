function netherRealms(inp) {
    inp=inp.split(',').map( a => a.trim() );
    let finalArr = [] ;
    let regName = /[^\+\-\*\/\.\d]/g ;
    //let regIDmg = /\-\d+\.*\d+|\d+\.*\d+|\d+/g ; // Initial damage
    let regIDmg = /-\d+\.*\d+|\d+\.*\d+|-\d+|\d+/g ; // Initial damage
    //let regIDmg = /-?\d+(\.\d+)*/g ; // Initial damage

    let regMDiv = /\*|\//g                                    
    for ( let i = 0 ; i < inp.length ; i ++  ){
        let resN = inp[i].match(regName);
        let resD = inp[i].match(regIDmg);
        let reMD = inp[i].match(regMDiv);

        let demonHealth = 0 ;        
        resN.forEach(element => {
            demonHealth += element.charCodeAt(0) ;
        });

        let damage = 0 ;
        if ( resD !== null ) {
            resD.forEach(element => {
                damage += Number(element) ;
            });
        }
        
        if ( reMD !== null ){
            reMD.forEach(element => {
                if ( element === '*' ) {
                    damage *= 2 ;
                } else if (element === '/'){
                    damage /= 2 ;
                }
            });
        }
        finalArr.push(inp[i] + ',' + demonHealth + ',' + damage)
    }
    let sorted = [] ;
    finalArr.forEach(element => {
        element = element.split(',');
        sorted.push(element) ;
    })
    sorted.sort( (a,b) => a[0].localeCompare(b[0]) ) ;
    sorted.forEach( element => {
        console.log(`${element[0]} - ${element[1]} health, ${Number(element[2]).toFixed(2)} damage`);
    } )
}
//netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**,    Azazel','Azazel');
//netherRealms('Gos/ho');