function ReverseAnArrayOfStrings(inp) {
    for (  i = 0 ; i < inp.length / 2 ; i ++ ) {
        let temp = inp[i] ;
        inp[i] = inp[inp.length -1 - i] ;
        inp[inp.length -1 - i] = temp ;
    }
    console.log(inp.join(' ').trim());
}
ReverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']) ;
ReverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']) ;
ReverseAnArrayOfStrings(['33', '123', '0', 'dd']) ;