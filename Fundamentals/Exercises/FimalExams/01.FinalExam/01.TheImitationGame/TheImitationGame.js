function theImitationGame(inp) {
let message = inp.shift();
    while ( (command = inp.shift()) !== 'Decode' ){
        let [ comm , p1, p2 ] = command.split('|') ;
        if ( comm === 'Move' ) {
            let n = Number(p1);
            let str = message.substring(0,n) ;
            message = message.replace(str,'');
            message += str ;
        } else if ( comm === 'Insert' ) {
            let index = Number(p1);
            let value = p2 ;
            if ( index >=0 && index <= message.length ) {
                let s1 = message.substring(0,index);
                let s2 = value ;
                let s3 = message.substring(index);
                message = s1 + s2 + s3;
                T=1
            }
        } else if ( comm === 'ChangeAll' ) {
            let subStr = p1 ;
            let replasment = p2 ;
            message = message.split(subStr).join(replasment);
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
// theImitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
// ]);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )