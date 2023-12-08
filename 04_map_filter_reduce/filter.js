const myNums = [1, 2, 5, 6, 7, 8];

myNums.filter((num) => num > 5); // This will not print anything.

// Note: filter function always return array of values if we want to use this value.
// we need to store the return values to variable (array). as bellow

const graterThenFive = myNums.filter((num) => num > 5);
// console.log(graterThenFive);

// with forEach loop

const newNums = [];

myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});

// console.log(newNums);

// real life use cases of filter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
];

// const requestedBooks = books.filter((book) => book.genre === "History");

requestedBooks = books.filter((bk) => bk.publish > 2000);

// Bellow code will return empty array because we have open { } block scope here so we need to explicitly return it.

requestedBooks = books.filter((bk) => {
  bk.genre === "History" && bk.publish >= 1995;
});

console.log(requestedBooks);
