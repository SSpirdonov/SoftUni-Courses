function listOfNames( inp ) {
    const res = inp.sort((a,b) => a.localeCompare(b));
    let orderNum = 1;
    inp.forEach((el)=> {
        console.log(`${orderNum}.${el}`);
        orderNum++;
    })    
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
