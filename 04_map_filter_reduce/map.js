const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.map((num) => num + 10);
// console.log(newNumbers);

// Method chaining

// First
newNumbers = numbers.map((num) => num * 10).map((num) => num + 5);
// console.log(newNumbers);

// Second
newNumbers = numbers.map((num) => num * 5).filter((num) => num > 30);
// console.log(newNumbers);

// Third
newNumbers = numbers
  .map((num) => num * 5)
  .map((num) => num + 3)
  .filter((num) => num >= 25);
console.log(newNumbers);
