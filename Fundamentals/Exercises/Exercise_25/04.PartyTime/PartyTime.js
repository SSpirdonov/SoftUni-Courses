function solve( inp ) {
    let map = new Map();
    let partyIndex = inp.indexOf('PARTY') ;
    
    for ( i = 0 ; i < partyIndex ; i ++ ) {
        let guestName = inp[i].trim() ;
        if (guestName === '') continue ;
        let firstSymbol = guestName[0] ;
        let guestType = '' ;        
          if (!isNaN(firstSymbol)) {  
            guestType = 'VIP' ;
        } else {
            guestType = 'REGULAR' ;
        }
        if (!map.has(guestName)) {
            map.set(guestName , guestType) ;
        }
    }
    for ( i = partyIndex + 1 ; i < inp.length ; i ++ ) {
        let person = inp[i] ;
        if ( map.has(person) ) {
            map.delete(person) ;
        }
    }
    console.log(map.size);
    let missingGuests = Array.from(map.entries());
    //missingGuests.sort( (a,b) => b[1].localeCompare(a[1]) );
    missingGuests.forEach( el => {
    if( el[1] === 'VIP' ) console.log(el[0]);
    } ) ;

    missingGuests.forEach( el => {
        if( el[1] === 'REGULAR' ) console.log(el[0]);
    } ) ;
}


// solve ( ['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ] ) ;

solve( ['7IK9Yo0h',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'9999QCbc',
'SVQXQccc'
] );