function pirates(inp) {
  let towns = {};
  let sailPos = 0;
  for (i = 0; i < inp.length; i++) {
    if (inp[i] === "Sail") {
      sailPos = i;
    }
  }
  for (i = 0; i < sailPos; i++) {
    let [city, people, gold] = inp[i].split("||");
    // city does not exists
    if (!Object.keys(towns).includes(city)) {
      towns[city] = [0, 0];
    }
    // city exists
    towns[city] = [ (towns[city][0] += Number(people)) , (towns[city][1] += Number(gold)) ];
  }
  for ( i = sailPos + 1 ; i < inp.length ; i ++) {
    if ( inp[i] === "End" ) break ;
    let [ command ,city , a1, a2 ] = inp[i].split('=>') ;
    if ( command === 'Plunder' ) {
        let people = Number(a1) , gold = Number(a2) ;
        towns[city][0] -= people ; 
        towns[city][1] -= gold ; 
        console.log( `${city} plundered! ${gold} gold stolen, ${people} citizens killed.` );
        if ( towns[city][0] === 0 || towns[city][1] === 0 ) {
            console.log( `${city} has been wiped off the map!` );
            delete towns[city] ;
        }

    } else if ( command === 'Prosper' ){
        let gold = Number(a1) ;
        if ( gold < 0 ) { 
           console.log("Gold added cannot be a negative number!" ); 
           continue ;
        }
        towns[city][1] += gold ;
        console.log( `${gold} gold added to the city treasury. ${city} now has ${towns[city][1]} gold.`);
    }
  }
  let sorted = Object.entries(towns) ;
  console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
  sorted.sort ( ( a,b ) => b[1][1] - a[1][1] || a[0].localeCompare(b[0]));
  sorted.forEach( el => {
      console.log( `${el[0]} -> Population: ${el[1][0]} citizens, Gold: ${el[1][1]} kg` );
  } )
}

// pirates([
//   "Nassau||95000||1000",
//   "San Juan||930000||1250",
//   "Campeche||270000||690",
//   "Port Royal||320000||1000",
//   "Port Royal||100000||2000",
//   "Sail",
//   "Prosper=>Port Royal=>-200",
//   "Plunder=>Nassau=>94000=>750",
//   "Plunder=>Nassau=>1000=>150",
//   "Plunder=>Campeche=>150000=>690",
//   "End",
// ]);

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
