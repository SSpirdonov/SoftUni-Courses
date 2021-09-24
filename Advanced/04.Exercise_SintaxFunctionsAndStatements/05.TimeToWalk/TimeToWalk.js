function timeToWalk( steps, footprint, speed ) {
    // S = V * t ; t = S / V   :  in seconds 
    // S = steps * footpriont  :  in meters
    let s = steps * footprint;
    let v = speed*1000/3600 // meters per second
    let t = (s / v ) ; // seconds
    let numOfRests =  s / 500;
    if (numOfRests % 500 !== 0) {
        numOfRests = Math.floor(numOfRests) ;
    } else {
        numOfRests = Math.floor(numOfRests) - 1
    }
    t += numOfRests * 60 ;
    let hh = Math.floor(t/3600) ;
    let mmTemp = (t - hh*3600)/60 ;
    let mm = Math.floor(mmTemp) ;
    let ss = Math.round((mmTemp - mm)*60);
    hh = formatTime(hh);
    mm = formatTime(mm);
    ss = formatTime(ss);

    console.log(hh + ':' + mm + ':' + ss);
//-----------------FUNCTIONS---------------------------------------
    function formatTime(num) {
        if ( num === 0  ) return '00';
        if ( num.toString().length === 1 ) return ( '0' + num );
        if ( num.toString().length > 1   ) return ( num.toString() );
    }
}
timeToWalk( 4000, 0.60, 5 );
timeToWalk( 2564, 0.70, 5.5 );