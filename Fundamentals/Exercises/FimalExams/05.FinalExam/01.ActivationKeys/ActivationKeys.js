function activationKeys(inp) {
    let raw = inp.shift() ;
    while( (line = inp.shift()) !== "Generate"  ) {
        let [comm , p1 , p2 , p3] = line.split('>>>');
        if ( comm === 'Contains' ) {
            let test = raw.indexOf(p1) ;
            if ( raw.indexOf(p1) !== -1 ) {
                console.log(`${raw} contains ${p1}`);
            } else {
               console.log( "Substring not found!" );
            }
        }
        if ( comm === 'Flip' ) {
            let str = raw.substring( Number(p2) , Number(p3) ) ;
            if( p1 === 'Upper' ) {
                let newStr = str.toUpperCase() ;
                raw=raw.replace(str,newStr);
            } else if ( p1 === 'Lower' ) {
                let newStr = str.toLowerCase();
                raw=raw.replace(str,newStr);
            }
            console.log(raw);
        }
        if ( comm === 'Slice'){
            let str = raw.substring( Number(p1) , Number(p2) ) ;
            raw=raw.replace(str,'');
            console.log(raw);
        }
    }
    console.log(`Your activation key is: ${raw}`);
}

// activationKeys(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"
// ]);

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);