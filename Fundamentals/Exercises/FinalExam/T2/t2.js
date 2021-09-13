function t2(inp) {
let n = Number(inp.shift());
let patt = /(^\$[A-Z][a-z]{2,}\$: |^%[A-Z][a-z]{2,}%: )\[\d+\]\|\[\d+\]\|\[\d+\]\|$ /g ;
//let regex = new RegExp('(?<tag>^\\$[A-Z][a-z]{2,}\\$: |^%[A-Z][a-z]{2,}%: )(?<digits>\\[\\d+\\]\\|\\[\\d+\\]\\|\\[\\d+\\]\\|)$') ;
let regex = new RegExp('(?<tag>^\\$[A-Z][a-z]{2,}\\$: |^%[A-Z][a-z]{2,}%: )(?<digits>\\[(?<g1>\\d+)\\]\\|\\[(?<g2>\\d+)\\]\\|\\[(?<g3>\\d+)\\]\\|)$') ;


for ( i = 0 ; i < n ; i ++ ) {
    let arr = regex.exec(inp[i],'g') ;
    if (arr === null) {
        console.log(`Valid message not found!`);
        continue ;
    }
    
    let mess = arr.groups.tag.split('') ;
    mess.shift(); mess.pop();mess.pop();mess.pop();
    let char1 = Number( arr.groups.g1 ) ;
    let char2 = Number( arr.groups.g2 );
    let char3 = Number( arr.groups.g3 );
    console.log(mess.join('')+ ': ' + String.fromCharCode(char1)+ String.fromCharCode(char2)+ String.fromCharCode(char3));
    
    T=1
}

T=1
}
t2(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);

t2(["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
])