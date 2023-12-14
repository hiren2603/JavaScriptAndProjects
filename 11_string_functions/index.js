const str = "Hello World";

// console.log(str[0])

// character Access charAt() method

// console.log("Hello".charAt(0))
// console.log("Hello".charAt(1))
// console.log("Hello".charAt(2))
// console.log("Hello".charAt(3))
// console.log("Hello".charAt(4))

//  charCodeAt() Method

let greet = "Welcome To JS"

console.log(greet.charCodeAt(3))

// comparing string

let a = "A"
let b = "B"

// console.log(a < b)
// console.log(a < b)
// console.log(a  === a)
// console.log(a  === b)

// convert to upper and lower case

const st1= "hello World!"
const st2 = "Hello World!"
// console.log(st1.toUpperCase())
// console.log(st2.toLowerCase())

// if(st1.toLowerCase() === st2.toLowerCase()){
//     console.log(true)
// }else{
//     console.log(false)
// }

// concat method

// console.log('Hello'.concat(' World!'))


// String methods

// const str2 = new String("Welcome to JS")
// console.log(str2)

// length
// console.log('welcome'.length)

// slice
// Note: in string index start from 0

const v1 = "String functions"
// console.log(v1.slice(2, 14))

// substring() Method
let out = v1.substring(7,12)
// console.log(out)

// console.log(v1.substring(7))

// replace() method

const result = v1.replace('String', "Array")
// console.log(result)

// trim() method
let v2 = "                Hello world!!!          !"
// console.log(v2.trim())

// padStart() Method

let text = "cde"
// console.log(text.padStart(5, "ab"))