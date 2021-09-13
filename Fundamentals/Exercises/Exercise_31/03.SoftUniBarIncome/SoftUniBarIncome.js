function softUniBarIncome(inp) {
    //let regex = new RegExp('%(?<name>[A-Z][a-z]+)%\\<(?<product>\\w+)\\>\\|(?<count>\\d+)\\|(?<price>\\d+\\.?\\d+)\\$');
    let regex = new RegExp('%(?<name>[A-Z][a-z]+)%(.*)\\<(?<product>\\w+)\>(?:.*)\\|(?<count>\\d+)\\|(?:.*)(?<price>\\d+\\.?\\d+)\\$');
    let income = 0;
    while ((row = inp.shift()) !== "end of shift") {
        let line = regex.exec(row, 'g');
        if (line !== null) {
            let name = line.groups.name;
            let product = line.groups.product;
            let count = Number(line.groups.count);
            let price = Number(line.groups.price);
            income += (price * count);
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);

// softUniBarIncome([
//     "%InvalidName%<Croissant>|2|10.3$",
//     "%Peter%<Gum>1.3$",
//     "%Maria%<Cola>|1|2.4",
//     "%Valid%<Valid>valid|10|valid20$",
//     "end of shift"
// ])