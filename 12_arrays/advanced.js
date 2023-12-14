const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(dc_heros)
// console.log(marvel_heros[3][1])

// concat()  // concat two or more arrays and returns a new array

const heros = marvel_heros.concat(dc_heros)
// console.log(heros)
// console.log(marvel_heros)

// sprade operator

const newHeros = [...marvel_heros, ...dc_heros ]
// console.log(newHeros)

// flat() method    // flaten an array. it takes argument like depth level ex.('infinity', 1, 2 or 3) 
const nums = [1, 2, 3, 4, 5, [6, 7, 8], [9, [10, 11]], 12]
const newNums = nums.flat(Infinity)
console.log(newNums)

// isArray() method

console.log(Array.isArray(nums))
console.log(Array.isArray("Hiren"))

// from()   // create an array from arguments

console.log(Array.from("Hiren"))
console.log(Array.from({name: "Javascript"}))

// of() method

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))