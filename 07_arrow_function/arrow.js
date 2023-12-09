const user = {
  username: "John",
  price: 999,
  welcomeMessage: function () {
    // console.log(`${this.username}, Welcome to Website`);
    // console.log(this); // here 'Function: welcomeMessage' will be print.
    // because scope of this keyword here is function scope
  },
};

// console.log(this); // here '{}' will be print because scope of this keyword is empty object.

user.welcomeMessage();
// user.username = "Jack";
// user.welcomeMessage();

// ------------------------- ++++++++++++++ -------------------- //

function chaiAurCode() {
  let userName = "hitesh";
  console.log(this.userName); // this will print undefined bacause
  // "this keyword will not refer the value defined in function so it will not work with function.
  //   it will work with objects"

  console.log(this); // this will print global object like bellow:

  //   <ref *1> Object [global] {
  //   global: [Circular *1],
  //   queueMicrotask: [Function: queueMicrotask],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   structuredClone: [Function: structuredClone],
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
}
// chaiAurCode();

const cHc = function () {
  let userName = "hitesh";
  // console.log(this.userName); // this will print undefined bacause
  // "this keyword will not refer the value defined in function so it will not work with function.
  //   it will work with objects"
};

const chai = () => {
  let username = "Hiren";
  // console.log(this.username);
};
// chai();

// -------------- Arrow Function -------------- //

// const addTwo = (num1, num2) => {
//     return num1 + num2
// };
// const addTwo = (num1, num2) => num1 + num2;      // implicit return will be used to return sum

// const addTwo = (num1, num2) => num1 + num2; // implicit return will be used to return sum
// console.log(addTwo(5, 15));

const logedInUser = {
  username: "Hiren",
  email: "hiren@gmail.com"
}

const addTwo = (n1, n2) => {userName: "hiren"};

console.log(addTwo(5, 15));
