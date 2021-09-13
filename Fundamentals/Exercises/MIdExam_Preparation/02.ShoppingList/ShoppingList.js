function shoppingList( inp ) {
    let k = 1 ;
    let prodArr = inp.shift().split('!');
    let len = inp.length ;
    
    for ( i = 0 ; i < len ; i++ ) {
        if ( inp[i] === 'Go Shopping!' ) break;
        let [command , item , newItem] = inp[i].split(' ') ;

        if  ( command === 'Urgent' ) {
            if ( !prodArr.includes(item) ) {
                prodArr.unshift(item) ;
            }

        } else if ( command === 'Unnecessary' ) {
            if ( prodArr.includes(item) ) {
                index = prodArr.indexOf(item) ;
                prodArr.splice(index,1);
            }
            
        } else if ( command === 'Correct' ) {
            if ( prodArr.includes(item) ) {
                index = prodArr.indexOf(item) ;
                prodArr[index] = newItem ;
            }
        } else if ( command === 'Rearrange' ) {
            if ( prodArr.includes(item) ) {
                index = prodArr.indexOf(item) ;
                prodArr.splice(index,1);
                prodArr.push(item);
            }
        }
    }

    console.log(prodArr.join(', '));
}

// shoppingList ( [
// 'Tomatoes!Potatoes!Bread',
// 'Unnecessary Milk',
// 'Urgent Tomatoes',
// 'Go Shopping!'
// ] ) ;

shoppingList ( [ 
'Milk!Pepper!Salt!Water!Banana',
'Urgent Grapes',
'Unnecessary Water',
'Correct Pepper Onion',
'Rearrange Grapes',
'Correct Tomatoes Potatoes',
'Go Shopping!'

     ] ) ;