function secretChat(inp) {
    let message = inp.shift();
    while ( (line = inp.shift()) !== 'Reveal' ) {
        let [ p1 , p2 , p3 ] = line.split(':|:');
        if ( p1 === 'InsertSpace' ) {
            let index = Number(p2) ;
            let res = message.split('');
            res.splice(index, 0 , ' ');
            message = res.join('');
            console.log(message);
        } else if ( p1=== 'Reverse' ) {
            let str = p2 ; // str -  substring
            let index =  message.indexOf(str) ;
            if ( index !== -1 ) {
                let subStr = message.slice(index, index + str.length ) ;  
                message = message.replace(subStr,'');
                subStr = subStr.split('').reverse().join('') ;
                message += subStr ;
                console.log(message);
            } else {
                console.log('error');
            }
            
        } else if ( p1 === 'ChangeAll' ) {
            let subStr = p2 ; // str -  substring
            let replacement = p3 ; 
            message = message.split(subStr).join(replacement) ;
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}

// secretChat([
//     'heVVodar!gnil',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);