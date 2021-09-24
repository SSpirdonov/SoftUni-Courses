function sameNumbers( num ) {
    let str = num.toString().split('').map(Number);
    let sum = str.reduce( (a,b) => a += b );
    let areSame = true ; 
    for (let i = 0 ; i < str.length - 1 ; i ++) {
        if ( str[i] !== str[i+1] ) {
            areSame = false ;
            break;
        }
    }
    console.log(areSame);
    console.log(sum);
}

sameNumbers( 2222222 );
sameNumbers( 1234 );