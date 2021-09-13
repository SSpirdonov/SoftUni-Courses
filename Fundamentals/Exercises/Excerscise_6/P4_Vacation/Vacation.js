function Vacation(num , typeOfGroup, dayOfWeek ) {
    let price = 0 ;
    if ( typeOfGroup === "Students" ) {
        if ( dayOfWeek === "Friday" ) {
            price = num * 8.45 ;
            if ( num >= 30 ) price -= price * 0.15 ;
        } else if ( dayOfWeek === "Saturday" ) {
            price = num * 9.80 ;
            if ( num >= 30 ) price -= price * 0.15 ;
        } else if ( dayOfWeek === "Sunday" ) {
            price = num * 10.46 ;
            if ( num >= 30 ) price -= price * 0.15 ;
        }
    } else if ( typeOfGroup === "Business" ) {
        if ( num >= 100 ) num -= 10 ;
        if ( dayOfWeek === "Friday" ) {
            price = num * 10.90 ;
        } else if ( dayOfWeek === "Saturday" ) {
            price = num * 15.60 ;
        } else if ( dayOfWeek === "Sunday" ) {
            price = num * 16 ;
        }
    } else if ( typeOfGroup === "Regular" ) {
        if ( dayOfWeek === "Friday" ) {
            price = num * 15 ;
            if ( num >= 10 && num <= 20) price -= price * 0.05 ;
        } else if ( dayOfWeek === "Saturday" ) {
            price = num * 20 ;
            if ( num >= 10 && num <= 20 ) price -= price * 0.05 ;
        } else if ( dayOfWeek === "Sunday" ) {
            price = num * 22.50 ;
            if ( num >= 10 && num <= 20 ) price -= price * 0.05 ;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
// Vacation( 30,"Students","Sunday" ) ;
Vacation( 40,"Regular","Saturday" ) ;