function CondenseArrayToNumber(inp) {
    let len = inp.length ;
    let condensed =  [];
    let sum = 0 ;
    while ( len > 1 ) {
        for ( i = 0 ; i < len - 1 ;  i++) {
            sum = inp[i] + inp[i+1];
            condensed.push(sum);
        }
        inp = condensed ;
        len = inp.length;
        condensed = [] ;
    }

    console.log(inp[0]);
}

CondenseArrayToNumber([2,10,3]);
CondenseArrayToNumber([5,0,4,1,2]);
CondenseArrayToNumber([4]);
