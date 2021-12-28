function juiceFlavors(inp) {
    const Juice = new Map();
    const order = [];
    inp.forEach( el => {
        let [juice, qnt] = el.split(' => ');
        qnt = Number(qnt);

        if(!Juice.has(juice)) {
            Juice.set(juice,qnt)
        } else {
            let newQnt = Juice.get(juice) + qnt ;
            Juice.set(juice,newQnt);
        }

        if(Juice.get(juice) >= 1000 && !(order.includes(juice))) {
            order.push(juice) ;
        }
    } );
    
    order.forEach(el => {
        let bottles = Math.floor(Juice.get(el) / 1000);
        console.log(`${el} => ${bottles}`);
    });
    
}

// juiceFlavors(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549'
// ]);

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);