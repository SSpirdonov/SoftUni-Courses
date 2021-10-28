function solve() {
    
    document.querySelector('button').addEventListener("click", onClick);
     console.log( document.getElementById('selectMenuTo'));
    function onClick() {
        
        let op = document.querySelector('#selectMenuTo option');
        op.value.children[0] = 'edno' ;
        op.value.children[1] = 'edwe' ;

        console.log(op);
    }
    
}