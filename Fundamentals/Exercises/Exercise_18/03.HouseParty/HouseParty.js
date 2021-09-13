function houseParty( inp ) {
    let listOfGuests = [] ;
    let isComming;
    for ( let str of inp) {
        let comArr = str.split(' ');
        let name = comArr[0] ;
        if ( comArr[2] === 'not' ) {
            isComming = false ;
        } else {
            isComming = true ;
        }
        if ( isComming ) {
            if ( listOfGuests.includes(name) ) {
                console.log(`${name} is already in the list!`  );
            } else {
                listOfGuests.push(name) ; 
            }
        } else {
            if ( listOfGuests.includes(name) ) {
                listOfGuests = listOfGuests.filter( a => a!== name) ;
            } else {
                console.log( `${name} is not in the list!` );
            }
        }
    }
    console.log(listOfGuests.join('\n'));
}
houseParty ( ['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
 ) ;
// houseParty ( ['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
//  ) ;