function wordsUppercase( str ) {
    let regexp = /\w+/g;
    let matches = str.match(regexp);
    let resArr = [] ;
    matches.forEach(element => {
        resArr.push(element.toUpperCase());
        T=1
    });
    console.log(resArr.join(', '));
}

wordsUppercase( 'Hi, how are you?' );
wordsUppercase( 'hello' );