function deserializeString(inp) {
    let empty = [];
    let strLength = 0;
    for (i = 0; i < inp.length; i++) {
        if (inp[i] === 'end') break;
        let indexes = inp[i].substring(2).split('/');
        strLength += indexes.length;
    }

    for (i = 0; i < strLength; i++) {
        empty.push('');
    }

    for (i = 0; i < inp.length; i++) {
        if (inp[i] === 'end') break;
        let letter = inp[i][0];
        let indexes = inp[i].substring(2).split('/').map(Number);
        for (j = 0; j < indexes.length; j++) {
            empty[indexes[j]] = letter;
        }
    }
    console.log(empty.join(''));
}

// deserializeString([
//     'a:0/2/4/6',
//     'b:1/3/5',
//     'end'
// ]);

deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);