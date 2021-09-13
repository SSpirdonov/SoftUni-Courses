function travelTime(input) {
  let destinations = {};
  // fill destinations
  for (let element of input) {
    let [country, town, cost] = element.split(" > ");
    // country does not exists
    if (!Object.keys(destinations).includes(country)) {
      destinations[country] = {};
    }
    // country exists
    // town does not exist
    if (!Object.keys(destinations[country]).includes(town)) {
      destinations[country][town] = Number(cost);
    }
    // town exists
    if (destinations[country][town] > Number(cost)) {
      destinations[country][town] = Number(cost);
    }
  }
  let sortedCountries = Object
                        .entries(destinations)
                        .sort((a, b) => 
                            a[0].localeCompare(b[0]) ||
                            Object.values (a[1]).reduce( (x,y) => x + y ) - Object.values(b[1]).reduce((x,y)=> x + y));
  

  for ( let [ country , towns ] of sortedCountries ) {
        let townAsEntries = Object.entries(towns).map( x => `${x[0]} -> ${x[1]}`) ;
        console.log(`${country} -> ${townAsEntries.join(' ')}`);

    }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
