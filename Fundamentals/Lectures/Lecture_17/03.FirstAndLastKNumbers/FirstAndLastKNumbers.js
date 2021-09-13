function firstAndLastKNumbers( inp ) {
    let k = inp[0] ;
    let sliced_1 = inp.slice( 1 , k + 1 ) ;
    let sliced_2 = inp.slice( inp.length - k , inp.length  ) ;
    console.log(sliced_1.join(' '));
    console.log(sliced_2.join(' '));

}
firstAndLastKNumbers ( [2, 7, 8, 9] ) ;
firstAndLastKNumbers ( [3, 6, 7, 8, 9] ) ;