function legendaryFarming( str ) {
    let input = str.split(' ') ;
    let shCount = 0 ,  frCount = 0, moCount = 0 , junkCount = 0 ;
    let inp = [] , junk = {}
    for ( let i = 0 , j = 0; i < input.length ; i+=2 , j++) {
       inp.push( [ Number(input[i]) , input[i+1] ] ) ;
    }    
    for ( let i = 0 ; i < inp.length ; i ++) {
        
        let material = inp[i][1].toLowerCase() ;
        if ( material === 'shards' ) {
            shCount += inp[i][0] ;
            if ( shCount >= 250 ) {
                console.log('Shadowmourne obtained!');
                shCount -= 250 ; 
                break ;
            }
        } else if ( material === 'fragments' ) {
            frCount += inp[i][0] ;
            if ( frCount >= 250) {
                console.log('Valanyr obtained!');
                frCount -= 250 ; 
                break ;
            }    
        } else if ( material === 'motes' ) {
            moCount += inp[i][0] ;
            if ( moCount >= 250) {
                console.log('Dragonwrath obtained!');
                moCount -= 250 ; 
                break ;
            }
        } else { 
            if ( !junk.hasOwnProperty(material) ) {
                junk[material] = 0 ;
            }
            junk[material] += inp[i][0] ;
        }
    }
    let res1 = { fragments: frCount , shards: shCount , motes: moCount }
    let res1Arr = Object.entries(res1).sort( ( a, b ) => b[1] - a[1] || a[0].localeCompare(b[0]) ) ;
    let res2Arr = Object.entries(junk).sort ( (  a, b ) => a[0].localeCompare(b[0])) ;
    res1Arr.forEach( el => {
        console.log( `${el[0]}: ${el[1]}` );
    } ) ;
    res2Arr.forEach( el => {
        console.log( `${el[0]}: ${el[1]}` );
    } ) ;
}

//legendaryFarming ( '250 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards' ) ;
legendaryFarming ( '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver' ) ;