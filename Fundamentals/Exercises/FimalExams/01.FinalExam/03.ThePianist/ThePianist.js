function thePianist(inp) {
let n = Number(inp.shift());
let pieces = {} ;
    for ( i = 0 ; i < n ; i++) {
     let [ piece , composer , key ] = inp.shift().split('|') ;
     if (!Object.keys(pieces).includes(piece) ) {
            pieces[piece] = [] ;
            pieces[piece][0] = '' ;
            pieces[piece][1] = '' ;
        }
        pieces[piece][0] = composer ;
        pieces[piece][1] = key ;
    }
    while ( (comm = inp.shift()) !== 'Stop' ) {
        let [act, piece, p1, p2] = comm.split('|') ;
        if (act === 'Add' ) {
            if ( Object.keys(pieces).includes(piece) ) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = [] ;
                pieces[piece][0] = p1;
                pieces[piece][1] = p2;
                console.log(`${piece} by ${pieces[piece][0]} in ${pieces[piece][1]} added to the collection!`);
            }
        } else if (act === 'Remove' ) {
            if (Object.keys(pieces).includes(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if ( act === 'ChangeKey' ) {
            if (Object.keys(pieces).includes(piece)){
                pieces[piece][1] = p1 ;
                console.log(`Changed the key of ${piece} to ${p1}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(pieces).sort( (a,b)=> a[0].localeCompare(b[0] || a[1][0].localeCompare(b[1][0])) );
    sorted.forEach( el => {
        console.log(`${el[0]} -> Composer: ${el[1][0]}, Key: ${el[1][1]}`);
    });
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

console.log('--------------------------');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);