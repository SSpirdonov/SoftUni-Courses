function addAndRemoveElements(inp) {
    let len = inp.length , arr = [] ;

    for ( let i = 0 ; i < len ; i++ ) {
        if ( inp[i] === 'add' ) {
            arr.push(i+1) ;
        } else {
            arr.pop() ;
        }
    }
    if( arr.length === 0  ) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
