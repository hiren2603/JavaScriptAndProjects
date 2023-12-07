console.log("hello world");

// declaring variables

// variable can be defined using var, let or const keyword in JS

// using var keyword

var myName;
console.log(myName); // this will return undefined
myName = "John";

// using let keyword
let language;
console.log(language); // this will throw ReferenceError (Cannot access 'language' before initialization)
language = "Javascript";

//  using const keyword
//  The value of the constant can not be change. we can not reasign value to constant variable.

// const pi;               // this will throw an error (Missing initializer in const declaration.)
pi = 3.14;
console.log(pi);
pi = 100.14; // This will throw an error (TypeError: Assignment to constant variable. )

// JS Arrays

let arr = ["JavaScript", "Python", "Java", 23, 400];

console.log(arr);
console.log(arr[0]); // getting value at first place of an array
console.log(arr[2]); // getting value at third place of an array
console.log(arr[5]); // this will return undefined because at 5th position no value is present.
console.log(typeof arr);

// JS Objects

let obj = {
  employee: "John",
  language: "Javascript",
  salary: 50000,
};

// JS MAPS data type

// Note:Map objects are collections of key-value pairs. A key in the Map may only occur once.
// it is unique in the Map's collection.
// note: Maps data type is not iteratable, duplicate entry will be eleminated in Maps

const map = new Map();
map.set("IN", "India");
map.set("GR", "German");
map.set("US", "united States of America");

console.log(map); // this will print
// Map(3) {
//   'IN' => 'India',
//   'GR' => 'German',
//   'US' => 'united States of America'
// }

console.log(obj);
console.log(obj.language);
console.log(obj.salary);
console.log(typeof obj);
