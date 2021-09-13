function removeOccurrences( inp ) {
    let replace = inp[0] ;
    let str = inp[1] ;
    let re = new RegExp(`${replace}`,'g');
    while ( str.includes(replace ) ) {            
        str = str.replace(re, '');
    }
    // let regexstring = "whatever";
    // let regexp = new RegExp(regexstring, "gi");
    // let str = "whateverTest";
    // let str2 = str.replace(regexp, "other");
    console.log(str);
}

removeOccurrences( ['ice' , 'kicegiciceeb' ]) ;

