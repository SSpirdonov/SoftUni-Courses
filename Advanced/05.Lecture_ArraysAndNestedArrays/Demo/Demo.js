// const myArr = [10,20,30,40];
// console.log(myArr);
// myArr[10] = 67;
// console.log(myArr);

function solve(...params) {
    let arr = [...params];
    let inp = [...arr];
    //console.log(...params);
    //console.log(arr);
    console.log(inp);
}   

solve(1);
solve(1,2);
solve(1,2,3);