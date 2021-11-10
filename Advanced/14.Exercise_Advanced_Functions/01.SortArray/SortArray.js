function sortArray(inp,order) {
    inp.sort((a,b) => {
        if(order === 'asc' ) { return a-b}
        if(order === 'desc') { return b-a}
    })
    console.log(inp);
}

sortArray([14, 7, 17, 6, 8], 'asc' );
sortArray([14, 7, 17, 6, 8], 'desc');