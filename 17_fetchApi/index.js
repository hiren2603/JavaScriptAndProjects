// Api request using fetch

fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
    return response.json()
})
.then(data => console.log("Data: ", data))
.catch((error)=> console.log(error))