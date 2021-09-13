function solve(input) {

    let meetings = {};
    
    //for (let  i = 0 ; i < input.length ; i ++) {
    for (let  line of input) {
        //let str = input[i].split(' ') ;
        //console.log();
        let [weekday, name1] = line.split(' ') ;
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
        meetings[weekday] = name1;
        console.log(`Scheduled for ${weekday}`);
        }
    }
        for (let [key, value] of Object.entries(meetings)) {console.log(`${key} -> ${value}`); }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']) 
