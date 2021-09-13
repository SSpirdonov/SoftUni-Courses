function DayOfWeek(day) {
    let days = [ "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday" ] ;
    if ( day >= 1 && day <= 7 ) {
        console.log(days[day]);
    } else {
        console.log('Invalid day!');
    }
}
DayOfWeek( 3 ) ;
DayOfWeek( 6 ) ;
DayOfWeek( 11 ) ;