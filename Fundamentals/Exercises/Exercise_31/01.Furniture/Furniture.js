function furniture(inp) {
    let index = 0 ;
    //let pattern = />>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)/g
    let totalMOneySpend = 0 ;
    let regex = new RegExp('>>(?<name>[A-Za-z]+)<<(?<price>\\d+\\.?\\d+)!(?<quantity>\\d+)');
    //let row = regex.exec(r,'g') ;

    console.log('Bought furniture:');
    while ( inp[index] !== "Purchase" ) {
         let r  = inp[index];
        //let regex = new RegExp('>>(?<name>[A-Za-z]+)<<(?<price>\\d+\\.?\\d+)!(?<quantity>\\d+)');
        let row = regex.exec(r,'g') ;
        if ( row !== null ) {
            console.log(row.groups.name);
            totalMOneySpend += ((row.groups.price)*(row.groups.quantity ))
        }
        index ++ ;        
    }
    console.log(`Total money spend: ${totalMOneySpend.toFixed(2)}`);
}

furniture([
    ">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);