function pieceofPie(inp, beginStr, endStr) {
  let firstIndex = 0,
    lastIndex = 0,
    nextIndex = 0,
    len = inp.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    if (inp[i] === beginStr) {
      firstIndex = i;
      nextIndex = i + 1;
      break;
    }
  }
  for (let i = nextIndex; i < len; i++) {
    if (inp[i] === endStr) {
      lastIndex = i;
      break;
    }
  }
  for (let i = firstIndex; i <= lastIndex; i++) {
    arr.push(inp[i]);
  }
  console.log(arr);
}
//   pieceofPie(
//     [
//       "Pumpkin Pie",
//       "Key Lime Pie",
//       "Cherry Pie",
//       "Lemon Meringue Pie",
//       "Sugar Cream Pie",
//     ],
//     "Key Lime Pie",
//     "Lemon Meringue Pie"
//   );

pieceofPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
