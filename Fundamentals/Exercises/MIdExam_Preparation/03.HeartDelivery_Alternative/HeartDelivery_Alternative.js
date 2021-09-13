function foo(arr) {
    arr = arr.filter(x => x !== "")
    let  field = arr.shift().split("@").map(Number)
    arr.pop()
    arr = arr.map ( x => x.split( " " )[1] ).map(Number) ;
    // Below is my own solutions . It's the same
    // arr = arr.map((x => Number(x.split(" ")[1]))); - it's the same like above row
    // arr = arr.map(x => x.split(' ')) ;
    // arr = arr.map(x => x[1]);
    // arr = arr.map(Number);
    let currentIndex = 0
 
    for (let i = 0; i < arr.length; i++) {
        if (currentIndex + arr[i] >= field.length) {
            currentIndex = 0
        } else {
            currentIndex += arr[i]
        }
 
        if (field[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`)
            continue
        }
        field[currentIndex] -= 2
        if (field[currentIndex] === 0) {
            console.log(`Place ${currentIndex} has Valentine's day.`)
        }
    }
 
    console.log(`Cupid's last position was ${currentIndex}.`)
    field.every(x => x === 0)
        ? console.log(`Mission was successful.`)
        : console.log(
            `Cupid has failed ${field.filter(x => x !== 0).length} places.`
        )
}
 
foo(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!'])
