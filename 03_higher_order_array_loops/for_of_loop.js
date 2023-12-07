// for...of loop works on iteratables like arrays and strings
const arr = ["java", "python", "c++", "JS"];

for (const val of arr) {
  //   console.log(val);
}

const obj = {
  js: "Javascript",
  py: "Python",
  cpp: "C++",
};

// for (const key of obj) {
//   console.log(key); // Throw an error:- obj is not iterable
// }

const greetings = "Hello World!";

for (const char of greetings) {
  console.log(char); // this will print each character of 'greetings'
}

// for...of loop with maps datatype
const map = new Map();
map.set("IN", "India");
map.set("GR", "German");
map.set("US", "united States of America");
map.set("IN", "India"); // this will be eleminated

for (const country of map) {
  console.log(country); // 'India' will be print only once.
}
