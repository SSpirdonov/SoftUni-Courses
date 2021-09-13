function employees(inp) {
    
    class Emploees {
        constructor ( name ) {
            this.name = name ;
        }
        //len() {return this.name.length ;}  
        len = () => this.name.length ;
    }  
    for (  i = 0 ; i < inp.length; i++  ){
        let inputString = inp[i] ;
        let empl  = new Emploees(inputString);
        console.log( `Name: ${empl.name} -- Personal Number: ${empl.len()}` );
    }
}

employees ( [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ] ) ;