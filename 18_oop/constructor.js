// constructor and new keyword

function User(username, isLogedIn, loginCount){
    this.username = username
    this.isLogedIn = isLogedIn
    this.loginCount = loginCount
    this.greetings = function(){
        console.log(`Welcome ${username}`)
    }
    return this     // good to return this
    // Note: Here No need to write 'return this',
    // because constructor function implicitly(automaticaly) return values 
}
// const userOne = User("hiren", true, 10)
// const userTwo = User("John", false, 20)

// console.log(userOne)    // here UserTwo will overwrite user One's values

// New Keyword with constructor function

const userOne = new User("hiren", true, 5)
const userTwo = new User("John", false, 10)
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)
console.log(userOne instanceof User)

