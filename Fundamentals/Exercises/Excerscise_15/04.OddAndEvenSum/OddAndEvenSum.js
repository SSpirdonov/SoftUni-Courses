function oddAndEvenSum(number) {
    let strArr = number.toString().split('') ; 
    let oddSum  = 0 ;
    let evenSum = 0 ;
    for ( let i = 0 ; i < strArr.length ; i++ ) {
        let num = Number(strArr[i]) ;
        if ( num % 2 === 0 ) {
            evenSum+= num;
        } else {
            oddSum += num ;
        }
    }

    console.log( `Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum ( 1000435 ) ;
oddAndEvenSum ( 3495892137259234 ) ;