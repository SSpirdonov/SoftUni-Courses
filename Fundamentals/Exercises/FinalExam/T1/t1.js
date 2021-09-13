function t1(inp) {
let str = inp.shift();
while ( ( row = inp.shift()) !==  "End" ) {
    let [ command, p1, p2 ] = row.split(' ') ;
    if ( command ===  'Translate' ) {
        str = str.split(p1).join(p2);
        console.log(str);
    } else if ( command ===  'Includes' ) {
        if ( str.indexOf(p1) !== -1  ) {
            console.log('True');
        } else {
            console.log('False');
        }
    } else if ( command === 'Start' ) {
        if ( str.indexOf(p1) === 0 ) {
            console.log('True');
        } else {
            console.log('False');
        }
    } else if ( command === 'Lowercase' ) {
        str = str.toLowerCase();
        console.log(str);
    } else if ( command === 'FindIndex' ) {
        let lastIndex = str.lastIndexOf(p1) ;
        console.log(lastIndex);
    } else if ( command === 'Remove' ) {
        let newStr = str.split('')
        newStr.splice(Number(p1), Number(p2)) ;

        console.log(newStr.join(''));
    }
    
}
}
// t1(["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"
// ]);

t1(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex P",
    "Remove 2 7",
    "End"
])