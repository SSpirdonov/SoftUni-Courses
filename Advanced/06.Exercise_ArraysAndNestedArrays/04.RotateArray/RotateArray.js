function rotateArray(inp, n) {
    let len = inp.length , res = [];
    for ( let i = 0 ; i < n ; i++ ) {
        inp.unshift(inp.pop());
    }
    console.log(inp.join(' '));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
