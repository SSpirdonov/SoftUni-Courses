function adAstra(inp) {
    let str = inp[0] ;
    let pattern = /#[A-Za-z ]+#\d{2}\/\d{2}\/\d{2}#\d+#|\|[A-Za-z ]+\|\d{2}\/\d{2}\/\d{2}\|\d+\|/g
    let arr = str.match(pattern) ;
    if (arr === null){
        console.log(`You have food to last you for: 0 days!`);
        return ;
    } 
        
    let totalCalories = 0 ;
    let printStr = '' ;
    arr.forEach(element => {
        let temp = element.split('');
        let symbol = temp.shift();
        temp.pop();
        temp = temp.join('');
        let [ itemName , expirationDate , calories ] = temp.split(symbol);
        totalCalories += Number(calories) ;
        printStr += 'Item: ' + itemName + ', Best before: ' + expirationDate + ', Nutrition: ' + calories + '\n';
        T=1
    });
    
    let lastDays = Math.floor(totalCalories/2000) ;
    console.log(`You have food to last you for: ${lastDays} days!`);
    console.log(printStr);
    
    T=1

}

adAstra([ '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);