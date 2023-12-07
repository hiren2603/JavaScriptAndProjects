const myNums = [1, 2, 5, 6, 7, 8];

myNums.filter((num) => num > 5); // This will not print anything.

// Note: filter function always return array of values if we want to use this value.
// we need to store the return values to variable (array). as bellow

const graterThenFive = myNums.filter((num) => num > 5);
console.log(graterThenFive);
