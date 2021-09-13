function gladiatorInventory( inp ) {
    let inv = inp.shift().split(' ') ;
    for ( let row of inp ) {
        let comArr = row.split(' ');
        let command =  comArr[0] ;
        let invent  =  comArr[1] ;
        if        ( command === 'Buy'     ) {
            if ( !inv.includes(invent) ) {
                inv.push(invent) ;
            }
        } else if ( command === 'Trash'   ) {
            if ( inv.includes(invent) ) {
                inv.splice( inv.indexOf(invent) , 1 ) ;
            } 
        } else if ( command === 'Repair'  ) {
            if ( inv.includes(invent) ) {
                inv.splice( inv.indexOf(invent) , 1 ) ;
                inv.push(invent) ;
            }

        } else if ( command === 'Upgrade' ) {
            let tmp = invent.split('-') ;

            if ( inv.includes(tmp[0]) ) {
                let pos = inv.indexOf(tmp[0]) + 1 ;
                inv.splice(pos , 0 ,tmp[0] + ':' + tmp[1] ) ;
            }
        }
    }
    console.log(inv.join(' '));
}

// gladiatorInventory( ['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']
//  ) ;
gladiatorInventory ( ['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
 ) ;
