function GladiatorExpenses( lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let helmet = 0 , sword = 0 , shield = 0 , armor = 0 ;
    for ( let i = 0 ; i <= lostFights ; i+=2 ) {
        if (i > 1) helmet ++ ;
        for ( let j = 0 ; j <= lostFights ; j+=3 ) {
            if ( j > 2 && j === i) shield ++ ;
        }
    }
    for ( let j = 0 ; j <= lostFights ; j+=3 ) {
        if (j > 2) sword ++ ;
    }
    if ( shield >= 2 ) armor = Math.trunc(shield / 2) ;


    helmetPrice = helmetPrice * helmet ;
    swordPrice  = swordPrice  * sword  ;
    shieldPrice = shieldPrice * shield ;
    armorPrice  = armorPrice  * armor  ;
    let totalPrice = helmetPrice + swordPrice + shieldPrice + armorPrice ;
    console.log( `Gladiator expenses: ${totalPrice.toFixed(2)} aureus` );
}
//GladiatorExpenses( 8 , 2 , 3 , 4 , 5 ) ;
GladiatorExpenses ( 23 , 12.50 , 21.50 , 40 , 200 ) ;