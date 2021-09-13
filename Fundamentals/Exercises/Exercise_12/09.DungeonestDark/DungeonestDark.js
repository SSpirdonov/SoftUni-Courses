function DungeonestDark(inp) {
   let  str    = inp[0];
   let  arr    = str.split("|"); 
   let  health = 100 ;
   let  item   = "" ;
   let  coins  = 0 ;
   let  points = 0 ;  
   let  alive  = true ; 
   for ( i = 0 ; i < arr.length ; i++ ) {
       let curr = arr[i].split(" ") ;
       item   = curr[0];
       points = Number(curr[1]);
       if ( item === 'potion' ) {
           if ( health < 100) {
                health += points ;
                if ( health > 100 ) {
                    points = points - (health - 100) ;
                    health = 100 ;
                }
            }
            console.log( `You healed for ${points} hp.` );
            console.log( `Current health: ${health} hp.` );
       } else if ( item === 'chest' ) {
           coins += points ;
           console.log( `You found ${points} coins.` );
       } else {
           health -= points ;
           if ( health > 0  ) {
               console.log( `You slayed ${item}.` );
           } else {
            console.log( `You died! Killed by ${item}.` ) ;
            console.log( `Best room: ${i+1}` ) ;
            alive = false ;
            break ;
           }
       }
   }
   if ( alive ) {
       console.log(`You've made it!`);
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
   }
}
//DungeonestDark( ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"] ) ;
DungeonestDark ( ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"] ) ;