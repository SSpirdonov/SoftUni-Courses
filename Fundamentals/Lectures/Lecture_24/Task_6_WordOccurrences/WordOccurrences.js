function solve( inp  ) {
    let map = new Map();
    for(let string of inp) {
        let word = string;
        let quantity = 1 ;
        if(!map.has(word)) {
        map.set(word, quantity);
        } else {
            let currQuantity = map.get(word);
            let newQuantity = currQuantity += quantity;
            map.set(word, newQuantity);
        }
    }
    let sorted = Array.from(map).sort( (a,b) => b[1] - a[1] ) ;
    console.log();
    for ( let el of sorted ) {
        console.log(el[0] + ' -> ' + el[1] + ' times');
    } 
}

solve( ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"] ) ;