function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", onMove);
  const output = document.getElementById('result');  
  //-------------------FUNCTIONS------------------------
  function onMove(ev) {
    const box = ev.target ;
    console.log(ev);
    console.log(box);
    
    const offset = Math.floor(ev.offsetX / box.clientWidth * 100) ;
    
    output.textContent = `${ offset }%`
  }
}
