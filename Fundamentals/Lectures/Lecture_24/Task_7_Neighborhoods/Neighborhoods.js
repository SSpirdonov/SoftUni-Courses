function solve(arr) {
    let map = new Map();
    let neighborhoods = arr[0].split(', ') ;
    for ( let neighborhood of neighborhoods ) {
        map.set( neighborhood , [] ) ;
    }
    for ( let i = 1 ; i < arr.length ; i++  ) {
        let current = arr[i].split(' - ') ;
        let neighborhood = current[0] ;
        let person = current[1] ;
        if ( neighborhoods.includes(neighborhood) ) {
            map.get(neighborhood).push(person) ;
        }
    }
    let sorted = Array.from(map) ;
    sorted = sorted.sort( (a,b) =>  b[1].length - a[1].length  ) ;
    sorted.forEach( el => {
        console.log( el[0] + ": " + el[1].length );
        for ( let i = 0 ; i < el[1].length ; i ++) {
            console.log('--' + el[1][i]);
            T=1
        }
    } )
    
}

solve ( ['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'] ) ;