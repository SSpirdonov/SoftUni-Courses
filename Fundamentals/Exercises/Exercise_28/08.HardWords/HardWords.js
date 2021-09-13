function hardWords(inp) {
    let sentence = inp.shift();
    inp = inp.join(' ').split(',').sort( ( a, b ) => b.length - a.length ) ;
    inp.forEach(word => {
        //let index =  sentence.indexOf('_'.repeat(word.length)) ;
        sentence = sentence.replace('_'.repeat(word.length), word);
        //console.log(word + ' Length: ' + word.length + " Index: " + index);
    });
    console.log(sentence);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);