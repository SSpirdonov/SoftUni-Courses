function stringSubstring(word, text) {
    let tokens = text.split(' ');
    for (let token of tokens) {
        if (token.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language ');