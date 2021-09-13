function solve(input) {

    let map = new Map();
    
    for (let string of input) {
    
        let tokens = string.split(' ');
    
        let name = tokens.shift();
    
        let grades = tokens.map(Number);
    
        if (!map.has(name)) { map.set(name, []); }
    
        let existing = map.get(name);
    
        for (let grade of grades) { existing.push(grade); }
    
    }
    
    let sorted = Array.from(map).sort(compareAverage); // See next slide
    
    // TODO: Print result
    sorted.forEach( el => {
        let printStr = el[0] + ': ' + el[1].join(', ') ;
        console.log(printStr);
    } ) ;
    

    function compareAverage(a, b) {
        // Calculate first average
        let avgA = 0;
        a[1].forEach(x => avgA += x);        
        avgA /= a[1].length;        
        // Calculate second average
        let avgB = 0;        
        b[1].forEach(x => avgB += x);        
        avgB /= b[1].length;        
        // Comparison        
        return avgA - avgB;
        
    }   
}

solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);