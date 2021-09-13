function companyUsers( inp ) {
    let companies = {}
    
    inp.forEach(el => {
        let [cName , emplID]  = el.split(' -> ');
        // company does not exist
        if ( !Object.keys(companies).includes(cName) ) {
            companies[cName] = [] ;
        }
        // company exists
        // Id does not exist
        
        if ( !companies[cName].includes(emplID) ) {
            companies[cName].push(emplID);
        }
    });
    let sorted = Object.entries(companies);
    sorted.sort( ( a , b ) => a[0].localeCompare(b[0]) ) ;
    sorted.forEach( element => {
        console.log(element[0]);
        element[1].forEach ( id => {
            console.log('-- ' + id);
        }) ;
    })
}

// companyUsers ( [
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
//     ]
// ) ;

companyUsers ( [
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
) ;