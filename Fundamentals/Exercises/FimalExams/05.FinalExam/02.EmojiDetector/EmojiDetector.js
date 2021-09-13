function emojiDetector ( inp ) {
    let str = inp[0]
    let patt = /\d/g ;
    let treshold = str.match(patt);//.map(Number).reduce((a,b)=>a*b);
    if ( treshold === null ) {
        treshold = 0 ;
    } else {
        treshold = treshold.map(Number).reduce((a,b)=>a*b);
    }
    console.log(`Cool threshold: ${treshold}`);
    // let regex = new RegExp('(::|\\*\\*)([A-Z][a-z]+)\\1') ;
    // let emoji = regex.exec(str,'gm');
    patt = / (::|\*\*)([A-Z][a-z]+)\1/g ;
    let em = str.match(patt) ;
    let pattern = /\w+/g ;
    console.log(`${em.length} emojis found in the text. The cool ones are:`);
    em.forEach(element => {
        let emoji = element.match(pattern)[0];
        let coolness = 0 ;
        for ( let i = 0 ; i < emoji.length ; i++) {
            let value = emoji[i].charCodeAt(0) ;
            coolness += value ;
        }
        if (coolness > treshold) {
            console.log(element);
        }
    });
}

//emojiDetector ( ["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"] ) ;
//emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
//emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
emojiDetector(['dsl;askfbvr'])