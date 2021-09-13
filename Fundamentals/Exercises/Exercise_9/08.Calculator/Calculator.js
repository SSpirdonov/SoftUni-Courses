function Calculator(n1 , operator , n2) {
    let res = 0 ;
    switch(operator) {
        case '+' : res = (n1 + n2).toFixed(2) ;  break ;
        case '-' : res = (n1 - n2).toFixed(2) ;  break ;
        case '/' : res = (n1 / n2).toFixed(2) ;  break ;
        case '*' : res = (n1 * n2).toFixed(2) ;  break ;
        case '%' : res = (n1 % n2).toFixed(2) ;  break ;
    }
    console.log(res);
}
Calculator( 25.5 , '-' , 3) ;