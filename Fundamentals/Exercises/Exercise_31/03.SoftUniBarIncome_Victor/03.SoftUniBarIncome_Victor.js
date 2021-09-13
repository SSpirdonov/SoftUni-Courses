/*
%([A_Z][a-z]*)%
<(w+)>
\|(\d+)\|
(-?\d+(?:\.\d+)?)\$

%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$
*/
function softUniBarIncomes(inp) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/ ;
    let income = 0 ;
    while ((line = inp.shift()) !== "end of shift") {
        let match = pattern.exec(line,'g') ;
        if ( match !== null ) {
            let [_,name, product, qty, price ]  = match ;
            qty = Number(qty) ;
            price = Number(price) ;
            income += qty * price ;
            console.log( `${name}: ${product} - ${ (qty * price).toFixed(2) }` );
        }
    }
    console.log( `Total income: ${income.toFixed(2)}` );
}

softUniBarIncomes([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);
console.log('--------------------------------------');
softUniBarIncomes([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);