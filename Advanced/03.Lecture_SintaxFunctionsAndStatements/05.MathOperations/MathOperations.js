function mathOperations( a,b,operation ) {
    let alabala = a + operation + b ;
    let res = eval(alabala);
    console.log(res);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');