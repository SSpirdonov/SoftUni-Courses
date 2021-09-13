function matchFullName( str ) {
    let pattern = /\b(?<=[ ]|\b)[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+\b/g ;
    let validNames = [] ;
    while ( (validName = pattern.exec(str) ) !== null ) {
        validNames.push(validName[0]) ;
    }
    console.log(validNames.join(' '));
}
matchFullName( 'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov' );