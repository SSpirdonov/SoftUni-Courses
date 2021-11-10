function listProcessor(inp) {

    // const obj = {
    //     add,
    //     remove,
    //     print
    // }
    const obj = {
        add: (str) => {resArr.push(str)},
        remove: (str) => {resArr = resArr.filter(el => !(el == str))},
        print: () => {console.log(resArr.join(','))}
    }

    let resArr = [] ;

    for ( let i = 0; i < inp.length; i++) {
        let currentString = inp[i] ;
        let command = currentString.split(' ')[0];
        let str = currentString.split(' ')[1];
        obj[command](str);
    }
    
    // function add(str) {
    //     resArr.push(str);
    // }
    // function remove(str) {
    //     resArr = resArr.filter(el => !(el == str));
    // }
    // function print() {
    //     console.log(resArr.join(','));
    // }

    
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);