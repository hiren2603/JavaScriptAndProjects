

const promisOne = new Promise(function(resolve,reject){
    // do any Async Task
    // DB Calls, cryptography, Network call etc...
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promisOne.then(function(){
    console.log("Promise consumed")
})

// another way 

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 is resolved");
})

// with Parameters

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username: "Hiren", email: "hien@mail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// fourth way

const promiseFour =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // error = false
        if(!error){
            resolve({username: "hiren", password: "1234"})
        }else{
            reject("Error: Something went wrong!!")
        }
    }, 1000)
})

promiseFour.
then((user)=>{
    console.log(user);
    return user.username
}).
then((username)=>{
    console.log(username)
}).
catch((error)=>{
    console.log(error)
})

// fifth way

const promiseFourPointOne =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // error = false
        if(!error){
            resolve({username: "hiren", password: "1234"})
        }else{
            reject("Error: Something went wrong!!")
        }
    }, 1000)
})

promiseFourPointOne.
then((user)=>{
    console.log(user);
    return user.username
}).
then((username)=>{
    console.log(username)
}).
catch((error)=>{
    console.log(error)
}).
finally(()=>{
    console.log("Promise is ether resolve or rejected")
})

// Sixth way using async await

promiseSix = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "Javascript", password: "js123"})
        }else{
            reject("Error: Javascript Something went wrong!!!!")
        }
    }, 1000)
})

async function consumePromiseSix(){
    try {
        const response = await promiseSix
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseSix()

// practical use case with promises

fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
    return response.json()
})
.then(data => console.log("Data: ", data))
.catch((error)=> console.log(error))


//  Practical use case with async await

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log("Response type: " ,typeof(response))
//     const data = await response.json()
//     console.log(data)
// }

// getAllUsers()
