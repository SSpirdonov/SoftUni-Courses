function printAnArrayWithAGivenDelimiter(inp, del) {
    let res = inp.join(del).trim() ;
    console.log(res);
}

printAnArrayWithAGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-");

console.log("--------------------------");

printAnArrayWithAGivenDelimiter(["How about no?", "I", "will", "not", "do", "it!"], "_");
