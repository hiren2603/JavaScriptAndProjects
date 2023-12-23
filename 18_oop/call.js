function setUsername(username){
    this.username = username
    console.log('called')
}

function createUser(username, email, password){
    // setUsername(username)    // this will not work 
    setUsername.call(this, username)
    this.email = email,
    this.password = password
}

const john = new createUser('John', 'john@fb.com', 'john123')
console.log(john)