// ES 6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `abc${this.password}123`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const john = new User('john', 'john@gmail.com', 'j0hn')
// console.log(john.encryptPassword())
// console.log(john.changeUsername())
// console.log(john)


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `123${this.password}abc`
}

User.prototype.changeUsername = function(){
    return (this.username.toUpperCase())
}

const jen = new User('Jen', 'jen@mail.com', '1ab2')
console.log(jen)

console.log(jen.changeUsername())
console.log(jen.encryptPassword())