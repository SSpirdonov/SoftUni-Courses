function stringLength( s1 , s2 , s3 ) {
    let sum = s1.length + s2.length + s3.length
    console.log(sum);
    console.log(Math.floor(sum/3));
}
stringLength( 'chocolate', 'ice cream', 'cake' );
stringLength( 'pasta', '5', '22.3' );