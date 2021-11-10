function solution() {
    let retValue = '';
    const meals = {
        apple : {carbohydrate: 1, flavour: 2},
        lemonade : {carbohydrate: 10, flavour: 20},
        burger : {carbohydrate: 5, fat: 7, flavour: 3},
        eggs : {protein: 5, fat: 1, flavour: 1},
        turkey : {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    const stock = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    const go = {
        restock,
        prepare,
        report
    }

    function restock(microelement, quantity) {        
        stock[microelement] += Number(quantity);
        retValue = 'Success' ;
    }
    
    function prepare(recipe, quantity) {
        let succssed = true ;
        let ingr = [];
        for (let [ingNeeded, ingValue] of Object.entries(meals[recipe])) {
            let ingInStock = stock[ingNeeded] ;           
            if(ingValue*quantity <= ingInStock ) {
                ingr.push(ingNeeded);
            } else {
                succssed = false;
                retValue = (`Error: not enough ${ingNeeded} in stock`);
                break;
            }
        }
        if(succssed) {
            retValue = ('Success');
            ingr.forEach( el => {                
                stock[el] -= meals[recipe][el]*quantity;                
            } )
        }
    }

    function report() {
        retValue = (`protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`);
    }

    
        function ret(row) {                
            let [command, ingradient, quantity] = row.split(' ');
            go[command]( ingradient, quantity) ;
            return retValue;                                            
        }    
    return ret;        
}

let manager = solution (); 
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));

// solution(
//   "restock flavour 50",
//   "prepare lemonade 4",
//   "restock carbohydrate 10",
//   "restock flavour 10",
//   "prepare apple 1",
//   "restock fat 10",
//   "prepare burger 1",
//   "report"
// );
