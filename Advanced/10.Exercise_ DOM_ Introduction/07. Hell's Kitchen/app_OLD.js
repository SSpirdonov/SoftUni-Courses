function solve() {
  //document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick(inp) {
   let globalObj = {} ; 
   inp.forEach(el => {
      let arr = el.split(' - ');
      let rName = arr[0] ;
      let workers = arr[1].split(', ');
      let employes = [] ;
      workers.forEach(employe => {
         employes.push(employe.split(' '));
      });
      
      if(!Object.keys(globalObj).includes(rName)) {
         let mans = {} ;         
         for ( let i = 0 ; i < employes.length ; i ++ ) {
            mans[employes[i][0]] = Number( employes[i][1] ) ;
         }    
         globalObj[rName] = mans;
      } else {
         let mans = {} ;         
         for ( let i = 0 ; i < employes.length ; i ++ ) {
            mans[employes[i][0]] = Number( employes[i][1] ) ;
         }    
         globalObj[rName] = mans;
      }
      
   });
   console.log(globalObj);
  }
  onClick([
    "PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Bob 1300, Joe 780, Jane 660",
    "PizzaHut - Peter 100, George 100, Mark 100, Ivan 500",
  ]);
}

solve();
