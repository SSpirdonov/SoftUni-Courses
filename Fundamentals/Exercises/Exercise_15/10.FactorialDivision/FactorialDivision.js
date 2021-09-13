function factorialDivision( a , b ) {
    
//-----------------------Main-----------------------------------------
    let  factA = sFact(a);
    let  factB = sFact(b);
    console.log(  (factA / factB).toFixed(2)  );

//--------------------Functions---------------------------------------
    function sFact(num){
        let rVal=1;
        for (let i = 2; i <= num; i++)
            rVal = rVal * i;
        return rVal;
    }    

    function rFact(num){
    if (num <= 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
    }
}
factorialDivision ( 5 , 2 ) ;
factorialDivision ( 6 , 2 ) ;