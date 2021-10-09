function carFactory( inpObj ) {
    const outObj = {} ;    
    let pow = 0, vol = 0 ;
    if(inpObj.power <= 90 ) {
        pow =  90 ;
        vol = 1800;
    } else if( inpObj.power > 90 && inpObj.power <= 120 ) {
        pow = 120 ;
        vol = 2400;
    } else {
        pow = 200 ;
        vol = 3500;
    }
    
    let wheel = inpObj.wheelsize ;
    if( wheel % 2 === 0 ) {
        wheel -- ;
    } 

    outObj.model = inpObj.model ;
    outObj.engine = { power : pow , volume : vol  } ;
    outObj.carriage = { type : inpObj.carriage , color : inpObj.color } ;
    //outObj.weels = [weel, weel, weel, weel]
    outObj.wheels = new Array(4).fill(wheel);
    console.log(outObj);
    return outObj ;
}

// carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 }
// );

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);