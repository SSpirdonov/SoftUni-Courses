/*
    (::|\*\*)[A-Z][a-z]{2,}(\1)
    \d
*/

function emojies ( inp )  {
    inp = inp.shift();
    let treshold = 1 ;
    let coolEmojis = [] ;
    let digits = inp.match(/\d/g).map(Number) ;
    for ( let digit of digits ) {
        treshold *= digit ;
    }
    //let ala = inp.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g) ;
    let emojis = inp.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g) ;
    for ( let emoji of emojis ) {
        let chars = emoji.slice(2,-2) ;
        let coolness = 0 ;
        for ( char of chars ) {
            coolness += char.charCodeAt(0) ;
        }
        if ( coolness > treshold ) {
            coolEmojis.push(emoji) ;
        }
    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);
    for ( let emoji of coolEmojis ) {
        console.log(emoji);
    }
}

emojies ( ["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"] );
emojies ( ["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojies ( ["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);