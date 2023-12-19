const user = {
    username: "hiren",
    signedIn: true,
    loginCount: 8,
    getUserDetails: function(){
        console.log(`User ${user.username} is currently ${this.signedIn ? "LoggedIn" : "Logout Out" } and he has loggedin ${this.loginCount} times in this week`)
        console.log(this)
    }
}

console.log(user.getUserDetails())
