function heroicInventory( inp ) {
        let result = [] ;
        inp.forEach(element => {
            let res = {}
           let rowArr =  element.split(' / ');
           let [hName, level, itemsArr] = rowArr ;
           if (itemsArr === undefined) {
               itemsArr = [] ;
           } else {
               itemsArr = itemsArr.split(', ') ;
           }
           //itemsArr = itemsArr?itemsArr.split(', ') : [];
           res.name = hName ;
           res.level = Number(level);
           res.items = itemsArr ;
           result.push(res)
        });
    let text = JSON.stringify(result);
    console.log(text);
    
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log('---------------------------');
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);