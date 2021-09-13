function passwordGenerator(inp) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let rawPass = inp[0].concat(inp[1]).toLocaleLowerCase().split('');
    let template = inp[2].toLocaleUpperCase();
    let replindex = 0;
    for (i = 0; i < rawPass.length; i++) {
        let char = rawPass[i];
        if (vowels.includes(char)) {
            if (replindex > template.length - 1) {
                replindex = 0;
            }
            rawPass[i] = template[replindex];
            replindex++;
        }
    }
    let newPass = rawPass.reverse().join('');;

    console.log(`Your generated password is ${newPass}`);
}
passwordGenerator([
    'easymoneyeazylife', 
    'atleasttencharacters', 
    'absolute'
]);

// passwordGenerator([
//     'ilovepizza', 
//     'ihatevegetables',
//     'orange'
// ]);