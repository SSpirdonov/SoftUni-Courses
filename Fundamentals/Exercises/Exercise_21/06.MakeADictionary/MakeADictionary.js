function makeADictionary( inp ) {
    class Input {
        constructor ( term , definition ) {
            this.term = term ;
            this.definition = definition ;
        }
    }
    let finalArr = [] ;
    inp.forEach(el => {
        let obj = JSON.parse(el) ;
        let key   = Object.entries(obj)[0][0] ;
        let value = Object.entries(obj)[0][1] ;
        let curr = new Input(key , value);
        let dontPush = false ;
        finalArr.forEach( i => {
            if ( i.term === curr.term ) {
                i.definition = curr.definition ;
                dontPush = true ;
            }
        });
        if ( !dontPush ) {
            finalArr.push(curr) ;
        }            
    });
    finalArr.sort( (a,b) => a.term.localeCompare(b.term) ) ;
    finalArr.forEach( i => {
        console.log( `Term: ${i.term} => Definition: ${i.definition}` );
    });        
}

makeADictionary ( [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
     ) ;