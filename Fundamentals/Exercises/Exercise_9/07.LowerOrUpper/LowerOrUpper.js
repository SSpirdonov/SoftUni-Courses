function LowerOrUpper(letter) {
    if ( letter.charCodeAt(0) >= 'a'.charCodeAt(0) && letter.charCodeAt(0) <= 'z'.charCodeAt(0) ) {
        console.log("lower-case");
    } else if ( letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <= 'Z'.charCodeAt(0) ) {
        console.log("upper-case");
    }
}
LowerOrUpper('L') ;