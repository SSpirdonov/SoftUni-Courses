function revealWords( str, templ ) {
    str = str.split(', ') ;
    for ( let word of str ) {
        let search = '*'.repeat(word.length) ;
        if ( templ.includes(search) ) {
            templ = templ.replace(search , word) ;
        }
    }
    console.log(templ);
}
//revealWords ( 'great', 'softuni is ***** place for learning new programming languages') ;
revealWords('great, learning','softuni is ***** place for ******** new programming languages') ;
