
function createAssemblyLine() {
    const obj = {
        hasClima : (inpObj) => {
            inpObj.temp = 21;
            inpObj.tempSettings = 21 ;
            inpObj.adjustTemp = () => {  
                if (inpObj.temp < inpObj.tempSettings) {
                    inpObj.temp++;
                } else if (inpObj.temp > inpObj.tempSettings) {
                    inpObj.temp -- ;   
                }
            }        
        },
        hasAudio : (inpObj) => {
            inpObj.currentTrack = { name : null , artist : null }
            inpObj.nowPlaying = () => {
                if (inpObj.currentTrack.name !== null && inpObj.currentTrack.artist !== null) {
                    console.log(`Now playing '${inpObj.currentTrack.name}' by ${inpObj.currentTrack.artist}`);
                }    
            }
        },
        hasParktronic : (inpObj) => {
            inpObj.checkDistance = (distance) => {
                if ( distance < 0.1 ) console.log('Beep! Beep! Beep!');
                if ( distance >= 0.1  && distance < 0.25 ) console.log('Beep! Beep!');
                if ( distance >= 0.25  && distance < 0.5 ) console.log('Beep!');
            }
        }
    }     
    return obj;       
}
    


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
//--------------------
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
//----------------------
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
//------------------------
console.log(myCar);



