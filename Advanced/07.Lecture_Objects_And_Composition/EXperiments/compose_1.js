let name = "Sofia";
let population = 1325744;
let country = "Bulgaria";
let town = { name, population, country };
console.log(town);// Object {name: "Sofia", population: 1325744,country: "Bulgaria"}
town.location = { lat: 42.698, lng: 23.322 };
console.log(town); // Object {…, location: Object}
