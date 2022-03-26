function loadRepos() {
    const div = document.getElementById('res');
    const url = "https://api.github.com/users/testnakov/repos";
    
    makeRequest();

    async function makeRequest() {            
        
        try {            
            const response = await fetch(url);
            if(response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.text();            
            console.log(data);
            div.textContent = data ;
        } catch(error) {
            console.log('Error', error);            
        }
        
        
    }
    
}