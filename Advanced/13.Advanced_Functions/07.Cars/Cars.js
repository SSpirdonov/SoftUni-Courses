function cars(input) {
    let o1,o2 ;
    input.forEach(el => {
        let [command, p1, p2, p3] = el.split(' ');
        
        if(command === 'create') {
            p1 = {}
            
            if ( p2 === 'inherit' ) {
                p3.p1 = p1;
                //console.log(p1);
                //console.log(p3);
                T=1
            }
        } else if( command === 'set') {
            p1.p2 = p3;
        } else if ( command === 'print') {
            console.log(p1);
            console.log(p3);
        }
        //console.log(command, p1, p2, p3);
    });

    
    

  // let c1 = {}
  // let c2 = {}
  // c2.c1 = c1;
  // c1.color = 'red'
  // c2.model = 'new'
  // console.log(c1);
  // console.log(c2);
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
