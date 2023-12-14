const arr = [10, 20, 30, 40, 50, 60]
// console.log(arr)
// console.log(arr[2])

// push()  // add element at the end of an array
arr.push(70, 80, 90)

// pop()    // remove element from the end of an array

arr.pop()

// shift()  // remove an element from start of an array

arr.shift()

// unshift()    // add elements at start of an array

arr.unshift(500, 600, 700)

// console.log(arr)
// console.log(arr.length)

// includes()   // returns boolean value true or false
// console.log(arr.includes(500))
// console.log(arr.includes(5000))


// indexOf()    // find index of an element in array

// console.log(arr.indexOf(30))
// console.log(arr.indexOf(3000))

// join()   // join all the elemets of an array and return new string.

const arr1 = ["a", "b", "c", "c", "d"]
const arr2 = [1, 2, 3, 4, 5]


let arr3 = arr1.join('-')
// console.log(arr3)
// console.log(typeof arr3)
// console.log(arr2.join(" < "))

// slice()  // return new array with elements within given range.

// Note: does not affect original array and return portion of an array 
// (last index will not be included)

let arr4 = [1, 2, 3, 4, 5, 6] 
// const res = arr4.slice(1, 3)
// console.log(res)
// console.log("A ", arr4)

// splice()     // return portion of an existing array and remove it from original array.
// Note: it includes start and end index

const res1 = arr4.splice(1, 3)
console.log(res1)
console.log("A ", arr4)



