function processOddPositions(inp) {
  // const oddNumbers = inp.filter(( v, i) => i % 2 === 1 );
  // const doubled = oddNumbers.map(x => x*2);
  // doubled.reverse();
//   console.log(
//     inp
//       .filter((v, i) => i % 2 === 1)
//       .map((x) => x * 2)
//       .reverse()
//       .join(" ")
//   );
  let result = inp.reduce((a,b) => a+b )
  console.log(result);
}

processOddPositions([10, 15, 20, 25]);
//processOddPositions([3, 0, 10, 4, 7, 3]);
