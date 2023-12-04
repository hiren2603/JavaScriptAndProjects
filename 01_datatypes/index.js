console.log("hello world")

// declaring variables

// variable can be defined using var, let or const keyword in JS

// using var keyword

var myName;
console.log(myName)        // this will return undefined
myName = "John"

// using let keyword
let language;
console.log(language)        // this will throw ReferenceError (Cannot access 'language' before initialization)
language = "Javascript"

//  using const keyword
//  The value of the constant can not be change. we can not reasign value to constant variable.

// const pi;               // this will throw an error (Missing initializer in const declaration.)
pi = 3.14;
console.log(pi)
pi = 100.14             // This will throw an error (TypeError: Assignment to constant variable. )


// JS Arrays

let arr = ["JavaScript", "Python", "Java", 23, 400]

console.log(arr)
console.log(arr[0])     // getting value at first place of an array
console.log(arr[2])     // getting value at third place of an array
console.log(arr[5])     // this will return undefined because at 5th position no value is present.
console.log(typeof(arr))

// JS Objects

let obj = {
    employee: "John",
    language: "Javascript",
    salary: 50000,
}

console.log(obj)
console.log(obj.language)
console.log(obj.salary)
console.log(typeof(obj))






