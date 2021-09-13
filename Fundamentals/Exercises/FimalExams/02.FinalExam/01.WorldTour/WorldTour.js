function worldTour(inp) {
    let dest = inp.shift();
    while ( (comm = inp.shift()) !== "Travel"  ) {
        let [act, p1, p2] = comm.split(':') ;
        if (act === 'Add Stop' ) {
            let index = Number(p1);
            let stop = p2 ;
            if (validIndex(index)) {  
                let s1 = dest.slice(0,index);
                let s2 = dest.slice(index);
                dest = s1 + stop + s2 ;
                
            }
        } else if (act === 'Remove Stop') {
            let start_index = Number(p1) ;
            let end_index = Number(p2) ;
            if ( validIndex(start_index) && validIndex(end_index) ) {
                end_index ++ ;
                let repl = dest.substring( start_index, end_index ) ;
                dest = dest.replace(repl,'');
                
            }            
        } else if (act === 'Switch' ) {
            let old_string = p1;
            let new_string = p2;
            dest = dest.split(old_string).join(new_string);
            
        }
        console.log(dest);
    }
    console.log(`Ready for world tour! Planned stops: ${dest}`);
    // ---------------------FUNCTIONS----------------------
    function validIndex(index) {
        if (index >= 0 && index < dest.length) {
            return true ;
        } 
        return false ;
       
    }
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"
]);