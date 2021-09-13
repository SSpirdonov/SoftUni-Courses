function solve(inp) {
    let map = new Map() ;
    let cars = [] ;
    let parkLot = [] ;   
    inp.forEach(element => {
        let car = element.split(', ');
        cars.push(car);
    }); 
    
    cars.forEach( car => {
      if ( car.length === 2 ) {
        if ( car[0] === 'IN' ) {
            if ( !parkLot.includes(car[1]) ) {
                parkLot.push(car[1]) ;
            }
        } else if ( car[0] === 'OUT' && parkLot.includes(car[1]) ) {
            parkLot.splice(parkLot.indexOf(car[1]),1) ;
        }
      }  
    } ) ;
    parkLot.sort( (a, b) => a.localeCompare(b) ) ;
    if ( parkLot.length === 0 ) {
        console.log("Parking Lot is Empty");
    } else {
        console.log( parkLot.join('\n') );
    }
}
//solve( ['IN'] )

// solve (['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']
// )

solve ( ['IN, CA2844AA',
'OUT, CA2844YY',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
 ) ;