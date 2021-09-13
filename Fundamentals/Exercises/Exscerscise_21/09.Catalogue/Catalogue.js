function catalogue( inp ) {
    let items = [] ;
    inp.forEach(el => {
        let item = el.split(' : ') ;
        let obj = {
            pName  : item[0] ,
            pPrice : Number(item[1]),
            firstLetter: item[0][0]  
        }
        items.push(obj) ;
    });
    let prArr = [] ;
    for ( let ch = 'A'.charCodeAt(0) ; ch <= 'Z'.charCodeAt(0) ; ch++ ) {
        for ( let el of items) {
            if ( el.firstLetter === (String.fromCharCode(ch))  ) {
                prArr.push(el);
            }    
        }    
        if ( prArr.length !== 0 ) {
            console.log(prArr[0].firstLetter);
            prArr.sort( (a,b) => a.pName.localeCompare(b.pName) ) ;
            for ( let obj  of prArr) {                
                console.log( `  ${obj.pName}: ${obj.pPrice}` );
            }
            prArr = [] ;
        }
        
    }    
}  
// catalogue ( ['Appricot : 20.4'
// ]) ;
catalogue ( ['Appricot : 20.4',
    'Fridge : 1500',
    'Deodorant : 10',
    'Boiler : 300',
    'Banana : 3.00',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]) ;