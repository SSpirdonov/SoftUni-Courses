function towns(inp) {
    class Towns {
        constructor ( name , latidude, longitude) {
            this.name = name ;
            this.latidude = latidude ;
            this.longitude= longitude;
        }
        logF = () => console.log(`{ town: '${this.name}', latitude: '${this.latidude}', longitude: '${this.longitude}' }`);
    }
    inp.forEach(i => {
        let inputArr = i.split('|');
        obj = new Towns ( inputArr[0].trim() ,Number( inputArr[1]).toFixed(2) , Number(inputArr[2]).toFixed(2) ) ;
        obj.logF();
    });
}

towns ( ['Sofia | 42.696552 | 23.32601',
         'Beijing | 39.913818 | 116.363625']
 ) ;