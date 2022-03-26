function loadRepos() {
   
    function reqListener () {
        console.log(this.responseText);
      }
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://api.github.com/users/testnakov/repos");
      oReq.send();
 
 }