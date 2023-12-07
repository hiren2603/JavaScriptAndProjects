// Note: forEach will not return values, it will always return undefined. we can perform action on values only within loop.

const langs = ["Java", "Python", "ruby", "C++"];

// 1st Method
langs.forEach(function (item) {
  // console.log(item);
});

// 2nd Method
langs.forEach((lang) => {
  // console.log(lang);
});

// 3rd Method
function printMe(item) {
  // console.log(item);
}
// langs.forEach(printMe);

// forEach Loop Parameters

langs.forEach((item, index, array) => {
  // console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
});

// forEach usecase for Array of an objects

const programmers = [
  {
    name: "John",
    language: "Python",
    salary: "30000",
  },
  {
    name: "Jen",
    language: "JavaScript",
    salary: "35000",
  },
  {
    name: "Jim",
    language: "DevOps",
    salary: "50000",
  },
];

programmers.forEach((person) => {
  // console.log(person.salary);
});

const salaries = programmers.forEach((person) => {
  return person.salary;
});

console.log(salaries); // this will print undefined
