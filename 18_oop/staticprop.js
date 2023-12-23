class User {
    constructor(username){
        this.username = username
        
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
    // static createId(){
    //     return `123`
    // }
}

const john = new User("john")
// console.log(john.createId())     // static method will not able accessible by object
console.log(john)

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const jen = new Teacher('jen', 'jen@mail.com')
console.log(jen)
jen.logMe()
// console.log(jen.createId())  // static method can not be accessed by object 