function proba() {
    let text = '>>Peter: 123 Mark: 456';
    let regexp = />>([A-Z][a-z]+): (\d+)/g;
    // let regexp = />>([A-Za-z]+)<<(\d*.?\d+)!\d+/g ;
    // let text = '>>Sofa<<312.23!3';  

    let matches = text.match(regexp);

    console.log(matches.length); // 2

    console.log(matches[0]); // Peter: 123

    console.log(matches[1]); // Mark: 456

}

proba();