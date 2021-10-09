function cityRecord(name, population, treasury) {
    let cityObj = {name, population, treasury};
    // let cityExp = {name: name , population: population, treasury: treasury};
    
    // let ime = name ;
    // let hora = population ;
    // let pare = treasury ;
    // expObj = { ime, hora, pare }
    // console.log(expObj);

    // let expObj = {} ;
    // expObj.name = name ;
    // expObj.population = population ;
    // expObj.treasury = treasury ;
    // console.log(expObj);

    // let expObj = {} ;
    // expObj.name = name ;
    // expObj.population = population ;
    // expObj.treasury = treasury ;
    // console.log(Object.entries(expObj));
    // console.log(Object.keys(expObj));
    // console.log(Object.values(expObj));

    return cityObj ;
    
}

//cityRecord("Tortuga", 7000, 15000);
//cityRecord("Santo Domingo", 12000, 23500);

// Хваща само първите два елемента за ключ и стойност. Следващите елементи на масива ги игнорира
const arr = [ ['0', 'a', 'addA'], ['1', 'b', 'addB'], ['2', 'c', 'addC'] ]; 
const obj = Object.fromEntries(arr);
console.log(obj);
