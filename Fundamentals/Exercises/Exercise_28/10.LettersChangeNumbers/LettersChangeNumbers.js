function lettersChangeNumbers(text) {
    let inp = text.split(' ');
    let dict = [];
    for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        dict.push(String.fromCharCode(i));
    }
    totalSum = 0;
    inp.forEach(el => {
        if (el !== '') {
            el = el.split('');
            let firstChar = el.shift(), secondChar = el.pop();
            let num = Number(el.join(''));
            if (firstChar.charCodeAt(0) >= 'A'.charCodeAt(0) && firstChar.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
                num /= charWeight(firstChar) ; 
            } else {
                num *= charWeight(firstChar) ; 
            }
            if (secondChar.charCodeAt(0) >= 'A'.charCodeAt(0) && secondChar.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
                num -= charWeight(secondChar) ; 
            } else {
                num += charWeight(secondChar) ; 
            }
            totalSum += num ;
        }
    });
    console.log(totalSum.toFixed(2));

    //---------------------FUNCTIONS----------------------------
    function charWeight(letter) {
        for (i = 0; i < dict.length; i++) {
            if (dict[i] === letter.toLowerCase()) {
                let weight = i + 1;
                return weight;
            }
        }
    }
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');