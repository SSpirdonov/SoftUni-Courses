function solve(text, search) {
  let words = text.split(" ");

  let counter = 0;

  for (let w of words) {
    if (w === search) {
      counter++;
    }
  }

  console.log(counter);
}
solve ("This is a word and it also is a sentence","is") ;