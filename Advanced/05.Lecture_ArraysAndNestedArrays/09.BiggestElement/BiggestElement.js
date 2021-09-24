function biggestElement(inp) {
  let arr = [];
  for( let row of inp ) {
    for( let col of row ) {
      arr.push(col);
    }
  }
  arr.sort( (a,b) => b - a ) ;
  console.log(arr[0]);
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);

biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
