function sortAnArrayBy2Criteria( inp ) {
    inp.sort() ;
    inp.sort( (a,b) => {
        let firstCriteria  =  a.length - b.length ;
        let secondCriteria =  a.localeCompare(b) ;
        return( firstCriteria || secondCriteria );
    }) ;

    //inp.sort( (a,b) => a.length - b.length || a.localeCompare(b)) ;

   
    console.log( inp.join('\n') );
}
sortAnArrayBy2Criteria ( ['Test' , 'deny' , 'omen' , 'Default'] ) ;
// console.log('-----------------------------------------' );
// sortAnArrayBy2Criteria ( ["alpha", "beta", "gamma"] ) ;
// console.log('-----------------------------------------' );
// sortAnArrayBy2Criteria ( ["Isacc", "Theodor", "Jack", "Harrison", "George"] ) ;