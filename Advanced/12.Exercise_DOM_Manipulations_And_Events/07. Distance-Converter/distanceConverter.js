function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onClick);

        const rates = {
            'km' : 1000,
            'm'  : 1,
            'cm' : 0.01,
            'mm' : 0.001,
            'mi' : 1609.34,
            'yrd': 0.9144,
            'ft' : 0.3048,
            'in' : 0.0254
        }
    
        
    function convert(inpRate, outRate, inpValue) {
        let outValue = inpValue * rates[inpRate] / rates[outRate] ;
        return outValue;
        
    }

    function onClick(ev) {
        const inp = document.getElementById('inputUnits').value ;
        const out = document.getElementById('outputUnits').value ;
        const val = Number(document.getElementById('inputDistance').value);
        document.getElementById('outputDistance').value = convert(inp, out, val) ;
    }
    //convert('ft','cm',1);

}
//attachEventsListeners();