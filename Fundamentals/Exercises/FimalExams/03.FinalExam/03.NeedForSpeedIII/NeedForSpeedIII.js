function needForSpeedIII( inp ) {
    let numerOfCars = Number(inp.shift());
    let cars = {} ;
    while ( (comm = inp.shift()) !== 'Stop' ) {
        if ( numerOfCars > 0 ) {
            let typeOfCommand = comm.split('|');
            numerOfCars -- ;
            let [cName, mileage , fuel ] = comm.split('|') ;
            if ( !Object.keys(cars).includes(cName) ) {
                cars[cName] = [] ;
                cars[cName][0] = 0 ;
                cars[cName][1] = 0 ;
                T=1
            }
            cars[cName][0] += Number(mileage);
            cars[cName][1] += Number(fuel);
            if (cars[cName][0] >=100000 ) delete cars[cName] ;
            if (cars[cName][1] > 75) cars[hName][0] = 75 ;
        } else {
            let typeOfCommand = comm.split(' : '); 
            let [ act, car, p1, p2 ] = typeOfCommand ;
            if ( act === 'Drive' ) {
                distance = Number(p1) ;
                fuel = Number(p2) ;
                if ( fuel >= cars[car][1] ) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    cars[car][1] -= fuel ;
                    cars[car][0] += distance ;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } if ( cars[car][0] >= 100000 ) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car] ;
                }
            } else if( act === 'Refuel' ) {
                fuel = Number(p1);
                let needFuel = 75 - cars[car][1] ;
                cars[car][1] += fuel ;
                if (cars[car][1] > 75) { 
                    cars[car][1] = 75 ; 
                    fuel = needFuel ;
                }
                console.log(`${car} refueled with ${fuel} liters`);
            }   else if( act === 'Revert' ) {
                kilometers = Number(p1);
                cars[car][0] -= kilometers ;
                if ( cars[car][0] >= 10000 ) {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                } else {
                    cars[car][0] = 10000 ;
                }
            }
            T=1
        }
    }
    let sorted = Object.entries(cars).sort( (a ,b) => ( b[1][0] - a[1][0] ) || ( a[0].localeCompare(b[0]) )   ) ;
    sorted.forEach( el => {
        console.log( `${el[0]} -> Mileage: ${el[1][0]} kms, Fuel in the tank: ${el[1][1]} lt.` );
    });
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
// needForSpeedIII(
// [
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ]);
  