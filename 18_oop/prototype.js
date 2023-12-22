/*
Task: create custom method 'trueLength' which return actual length of given string.
let myName = "Hiren";
let myChannel = "chai     "
console.log(myName.trueLength())
*/

// example: 1

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.greetings = function(){
    console.log('Welcome to Object')
}
Array.prototype.heyHiren = function(){
    console.log('Hiren says Hello')
}

myHeros.greetings()
heroPower.greetings()
// heroPower.heyHiren()     // array will not share properties with objects


// prototypal Inheritance

const user = {
    username: "John",
    email: "john@gmail.com"
}

const teacher = {
    makeVideo: true
}
const teachingSupport ={
    isAvailable: true
}
const TASupport = {
    makeAsignment: "JS Asignment",
    fulltime: true,
    __proto__ : teachingSupport
}

console.log(TASupport.isAvailable)

teacher.__proto__ = user,
console.log(teacher.email)
teacher.email = "teacher@mail.com"
console.log('TEACHER', teacher)
console.log('USER', user)


// modern Syntex of __proto__

Object.setPrototypeOf(teachingSupport, teacher)


// Problem: 1 solution

let myName = "Welcome to                 ";

String.prototype.trueLength = function(){
    console.log(this.trim().length, this.trim())
    return {
        length: this.trim().length,
        string: this.trim()
    }
}

// console.log(myName.trueLength())
myName.trueLength()
'Hello          '.trueLength()