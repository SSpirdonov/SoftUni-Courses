function playingCards(face, suit) {
    
    const faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663'
    }
    if(faces.includes(face) == false ) {
        throw new Error('Invalid face :  ' + face);
    }
    if(Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit :  ' + suit);
    }

    return {
        face,
        suit : suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}
const card1 = playingCards('A', 'S');
console.log(card1.toString());
console.log('-------------------------');
console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
//console.log(playingCards('1', 'C').toString());
console.log(playingCards('9', 'Y').toString());
// playingCards('10', 'H');
// playingCards('1', 'C');