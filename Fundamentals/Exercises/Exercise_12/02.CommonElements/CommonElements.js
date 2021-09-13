function CommonElements(inp1 , inp2) {
    
    for ( i = 0 ; i < inp1.length ; i ++ ) {
        for ( j = 0 ; j < inp2.length ; j ++ ) {
            if ( inp1[i] === inp2[j] ) {
                console.log(inp1[i]);
            }
        }   
    }
}
CommonElements ( ['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'] ) ;
CommonElements ( ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l'] ) ;