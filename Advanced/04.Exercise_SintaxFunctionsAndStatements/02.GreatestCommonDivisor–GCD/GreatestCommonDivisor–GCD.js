function greatestCommonDivisor(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) return ;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
}

greatestCommonDivisor( 15, 5 );
greatestCommonDivisor( 2154, 458 );