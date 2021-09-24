function printEveryN_thElementFromAnArray( inp, n) {
    let res = inp.filter( (v, i) => i % n === 0 );
    //console.log(res.join());
    return res;
}

printEveryN_thElementFromAnArray(["5", "20", "31", "4", "20"], 2);

printEveryN_thElementFromAnArray(["dsa", "asd", "test", "tset"], 2);
printEveryN_thElementFromAnArray(["1", "2", "3", "4", "5"], 6);
