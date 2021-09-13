function splitLines() {
    //The default line ending varies depending on the platform (Unix, Windows, etc.). 
    //The line splitting provided in this example works on all platforms.

let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)

console.log(lines)
}
splitLines()