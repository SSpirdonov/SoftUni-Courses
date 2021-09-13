function mirrorWords( inp) {
    let str = inp[0] ;
    let patt_1 = /#[A-Za-z]{3,}##[A-Za-z]{3,}#|@[A-Za-z]{3,}@@[A-Za-z]{3,}@/g ;
    let res_1 = str.match(patt_1) ;
    if ( res_1 === null ) {
        console.log(`No word pairs found!`);
        console.log('No mirror words!');
        return ;    // ????????????????????????????
    }
    let len = res_1.length ;
    console.log(`${len} word pairs found!`);
    let regex = new RegExp('(?:#|@)(?<g1>[A-Za-z]{3,})(?:##|@@)(?<g2>[A-Za-z]{3,})(?:#|@)');
    let isMirrorWords = false ;
    let mirrorWords = [] ;
    res_1.forEach(el => {
        T=1
        let res_2 = regex.exec(el,'g') ;
        let  gTemp = res_2.groups.g2.split('').reverse().join('');
        //console.log(gTemp + '<=>' + res_2.groups.g1 );
        if (gTemp === res_2.groups.g1 ) {
            isMirrorWords = true ; 
            mirrorWords.push(`${res_2.groups.g1} <=> ${res_2.groups.g2}`) ;
        }        
    });
    if ( isMirrorWords ) {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
         
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords( [
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
     );

//mirrorWords( [ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ] );
//mirrorWords( [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ] );
