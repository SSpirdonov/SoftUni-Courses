function sortingNumbers( inp ) {
    inp = inp.sort((a,b) => {
        return a-b;
    })
    const res = [];
    while (inp.length != 0) {
        res.push(inp.shift(), inp.pop());
    }
    console.log(res.join());
    return res;
}

sortingNumbers( [1, 65, 3, 52, 48, 63, 31, -3, 18, 56] );