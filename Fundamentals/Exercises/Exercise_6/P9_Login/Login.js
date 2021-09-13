function Login(inp) {
    let userName = inp[0] ;
    let pass = "";
    let trysts = 0 ;
    for ( let j = userName.length - 1 ; j >= 0 ; j--  ) {
            pass += userName[j] ;
    }
    for ( let i = 1 ; i < inp.length ; i ++ ) {
        trysts++;
        if      ( pass === inp[i] )   { console.log(`User ${userName} logged in.`); break; }
        else if ( trysts === 4    )   { console.log(`User ${userName} blocked!`  ); break; }
        else                          { console.log("Incorrect password. Try again.");     }

    }
}
//Login( ["Acer","login","go","let me in","recA"] ) ;
Login( ["sunny","rainy","cloudy","sunny","not sunny"] )