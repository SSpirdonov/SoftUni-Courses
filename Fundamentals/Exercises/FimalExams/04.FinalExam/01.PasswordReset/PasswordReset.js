function passwordReset(inp) {
let raw = inp.shift();
while ( (line = inp.shift()) !==  "Done" ) {
    let [comm, p1, p2] = line.split(' ') ;
    if ( comm === 'TakeOdd' ) {
        let newPass = '' ;
        for ( let i = 1 ; i < raw.length ; i+= 2 ) {
            newPass += raw[i];
        }
        console.log(newPass);
        raw = newPass ;
   }
    if ( comm === 'Cut' ) {
        let sub = raw.substring( Number(p1), Number(p1) + Number(p2) );
        raw = raw.replace( sub , '' );
        console.log(raw);
    }
    if ( comm === 'Substitute' ) {
        if ( raw.indexOf(p1) !== -1 ) {
            raw = raw.split(p1).join(p2);
            console.log(raw);
        } else {
            console.log('Nothing to replace!');
        }
    }
}
console.log( `Your password is: ${raw}` );
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"
// ]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
