function addAndSubtract( a , b , c) { 
    console.log(substract( sum( a, b ) , c ));

//---------------------Functions-----------------------
    function sum(num1 , num2) {
        return num1 + num2;
    }    
//-----------------------------------------------------
    function substract(sum , num3) {
        return sum - num3 ;
    }
}

addAndSubtract ( 23,6,10 ) ;
addAndSubtract ( 1 , 17 , 30 ) ;
addAndSubtract ( 42,58,100 ) ;