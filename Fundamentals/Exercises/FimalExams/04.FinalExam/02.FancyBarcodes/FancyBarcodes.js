function fancyBarcodes(inp) {
    let noc = Number(inp.shift()) ;
    let patt = /\d+/g
    let regex = new RegExp('@#+(?<code>[A-Z][A-Za-z\\d]+[A-Z])@#+') ;
    for ( let i = 0 ;i < noc; i++ ){
        let text = inp[i]
        let barCode = regex.exec(text,'g') ;
        let productGroup = '';
        if ( barCode !== null && barCode.groups.code.length >= 6 ) {
            let digits = barCode.groups.code.match(patt) ; 
            if ( digits !== null ) {
                digits.forEach( el => {
                    productGroup+=el;
                } )
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);