class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password =  value
    }
}

const john = new User('john@ai.com', 'john123')

console.log(john.email);
console.log(john.password)