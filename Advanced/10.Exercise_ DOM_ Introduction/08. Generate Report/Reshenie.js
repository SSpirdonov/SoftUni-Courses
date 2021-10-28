     
function generateReport() {
    const output = document.getElementById('output');
    const values = Array.from(document.querySelectorAll('tbody tr'));
    const columns = Array.from(document.querySelectorAll('thead tr th'));
    //--------------------------------------------------------------------
    //console.log(columns);
    //--------------------------------------------------------------------
    let result = [];
 
    for (let i = 0; i < values.length; i++) {
        let currentObject = {}; 
        for (let j = 0; j < columns.length; j++) {
            //-----------------------------------------------
            // console.log(columns[j].children[0].checked);
            // console.log(columns[j].children[0].name);
            //-----------------------------------------------
            if (columns[j].firstElementChild.checked) {
                currentObject[columns[j].firstElementChild.name] = values[i].children[j].textContent;
                //----------------------------------------------------------------
                //console.log(values[i].children[j].textContent);
                //console.log(currentObject);
                //----------------------------------------------------------------
            }
        }
 
        if (currentObject){
            result.push(currentObject);
            //console.log(currentObject);
        }
    }
    output.innerHTML = JSON.stringify(result);
}