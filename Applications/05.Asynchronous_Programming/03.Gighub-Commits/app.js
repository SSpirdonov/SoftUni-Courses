function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repository}/commits`
    const ul = document.getElementById('commits');
            
    makeRequest()    
    async function makeRequest() {    
        try {   
            const response = await fetch(url);
            if(response.ok == false) { 
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const commits = await response.json();            
            for (let row of commits) {
                //console.log(row.commit.author.name + ': ' + row.commit.message);
                const li = document.createElement('li');
                li.textContent = row.commit.author.name + ': ' + row.commit.message ;
                ul.appendChild(li);

            }
            //console.log(commits);
        } catch(error) {
            const li = document.createElement('li');
            li.textContent = 'Error Gepi  ' + error ;
            ul.appendChild(li);

            //console.log('Error Gepi', error);
        }
            
            
    }


}