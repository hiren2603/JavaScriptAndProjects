class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const john = new Teacher('John', 'john@gmail.com', '123john')
john.addCourse()
const jen = new User('jen')
jen.logMe()

// console.log(john === jen)        // retrun false
// console.log(john === Teacher)    // return false

console.log(john instanceof Teacher)
console.log(jen instanceof Teacher)
console.log(jen instanceof User)