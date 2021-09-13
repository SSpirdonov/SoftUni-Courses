function aMinerTask(inp) {
let collection = {}
for ( let i = 0 ; i < inp.length ; i += 2 )  {
    let resource = inp[i] ;
    let quantity = Number(inp[i+1]) ;
    if ( !Object.keys(collection).includes(resource) ) {
        collection[resource] = quantity ;
    } else {
        collection[resource] += quantity ;
    }
    
}
let resultArr = Object.entries(collection) ;
resultArr.forEach( el => {
    console.log(el[0] + ' -> ' + el[1]);
} )
}

//aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
