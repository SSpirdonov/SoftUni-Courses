function city(name, population, treasury) {
  const res = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    },
    applyRecession(percentage) {
        this.treasury -= Math.ceil(this.treasury * percentage / 100);
    },
  };
  return res;
}

const tortuga = city("Tortuga", 7000, 15000);
//const barbados= city('Barbados', 8000, 20000 ); 
console.log(tortuga);
//console.log(barbados);
tortuga.collectTaxes();
//barbados.collectTaxes();
console.log(tortuga);
//console.log(barbados);
tortuga.applyGrowth(5);
console.log(tortuga);
tortuga.applyRecession(10);
console.log(tortuga);