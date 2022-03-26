function attachEvents() {
    const locName = document.getElementById('location');
    locName.setAttribute('placeholder', 'New York, London, Barcelona');
    const btnGetWeather = document.getElementById('submit');
    
    btnGetWeather.addEventListener('click', start);
    const divForecast = document.getElementById('forecast');
    const divCurrent  = document.getElementById('current');
    const divUpcoming = document.getElementById('upcoming');    

    async function start() {
        
        const result = await getForecast(locName.value);          
            if(result){                
                let res = result.current;
                let upc = result.upcoming;
                let conditionRes = res.forecast.condition;

                divCurrent.replaceChildren();
                divUpcoming.replaceChildren();

                divForecast.style.display = 'block';
                
                const divCurrentIn = e('div',{className: "forecast"});                
                const divCurrentSpan0 = e('span',{className: "condition symbol"}, conditionToSymbol(conditionRes));
                const divCurrentSpan1 = e('span',{className: "condition"});
                const divCurrentSpan11 = e('span',{className: "forecast-data"},res.name);
                const divCurrentSpan12 = e('span',{className: "forecast-data"},res.forecast.high+'°/'+res.forecast.low+'°');
                const divCurrentSpan13 = e('span',{className: "forecast-data"},res.forecast.condition);
                
                divCurrent.appendChild(divCurrentIn);
                divCurrent.appendChild(divCurrentSpan0);
                divCurrent.appendChild(divCurrentSpan1);
                divCurrentSpan1.appendChild(divCurrentSpan11);
                divCurrentSpan1.appendChild(divCurrentSpan12);
                divCurrentSpan1.appendChild(divCurrentSpan13);                
                
                const divUpcIn = e('div',{className: "label"},'Three-day forecast');
                divUpcoming.appendChild(divUpcIn);                    
                const divIn = e('div',{className: "forecast-info"});
                divUpcoming.appendChild(divIn);                    
                
                for(let i = 0; i<3; i++){
                    const spanUpc0 = e('span',{className: "upcoming"});                
                    divIn.appendChild(spanUpc0);                                                    
                    
                    let conditionUpc = upc.forecast[i].condition;                
                    const spanUpc1 = e('span',{className: "symbol"},conditionToSymbol(conditionUpc));
                    spanUpc0.appendChild(spanUpc1); 
                    
                    const spanUpc2 = e('span',{className: "forecast-data"},upc.forecast[i].high+'°/'+upc.forecast[i].low+'°');
                    spanUpc0.appendChild(spanUpc2); 
                    
                    const spanUpc3 = e('span',{className: "forecast-data"},upc.forecast[i].condition);                
                    spanUpc0.appendChild(spanUpc3); 
                }                                
            }
    }
}

attachEvents();

async function getForecast(name) {
    const code = await getLocationCode(name);
    try {        
        const[current, upcoming] = await Promise.all([
            getCurrentCode(code),
            getUpcoming(code)
        ]);
        if (current == undefined || upcoming == undefined){
            throw new Error (`${name} not found. THIS name is incorrect`);
        }
        
        return {current, upcoming};
    } catch (error) {
        console.log(error);
    }

    
}

async function getLocationCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    
    try{
        const res = await fetch(url);
        if(!(res.status === 0 || (res.status >= 200 && res.status < 400))) {
            throw new Error ('The request was not successful');
        }
        const data = await res.json();
        const location = data.find(l => l.name == name);
        
        return location.code;
    } catch(error) {
        console.log(error);
    }

}

async function getCurrentCode(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code ;
    
    try {
        const res = await fetch(url);
        if(!(res.status === 0 || (res.status >= 200 && res.status < 400))) {
            throw new Error ('The request was not successful');
        }

        const data = await res.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code ;
    try {        
        const res = await fetch(url);
        if(!(res.status === 0 || (res.status >= 200 && res.status < 400))) {
            throw new Error ('The request was not successful');
        }
        const data = await res.json();
    
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

// Това е функцията за създаване на HTML елементи в DOM дървото.
function e(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number'){
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    
    return element;
}

function conditionToSymbol(res) {
    let currentSymbol = '';
    if (res === 'Sunny') {
        currentSymbol = '☀';
    } else if (res === 'Partly sunny') {
        currentSymbol = '⛅';
    } else if (res === 'Overcast') {
        currentSymbol = '☁';
    } else if (res === 'Rain') {
        currentSymbol = '☂';
    }
    return currentSymbol;
}
