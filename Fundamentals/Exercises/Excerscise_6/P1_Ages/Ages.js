function ages(n) {
    let age = "" ;
    if       (n >= 0 &&  n <=  2) age = "baby"          ;
    else if  (n >= 3 &&  n <= 13) age = "child"         ;
    else if  (n >=14 &&  n <= 19) age = "teenager"      ;
    else if  (n >=20 &&  n <= 65) age = "adult"         ;
    else if  (n >=66            ) age = "elder"         ;
    else                          age = "out of bounds" ; 
    console.log(age);
    
}
ages(20);
ages(1);
ages(100);