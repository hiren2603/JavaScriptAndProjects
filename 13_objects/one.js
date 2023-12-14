// objects can be created by two way constructor way or Literals way
// Note: if object is made by constructor it is called singleton.

// Object literals

const jsUser = {
    name: "John",
    "full name": "Doe",
    email: "john@mail.com",
    age: 20,
    location: "Washington DC",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}
// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser.full name)   // this will throw an error
// console.log(jsUser["full name"])


// Object with symbole
const mySym = Symbol("1234")
const person ={
    name: "Jack",
    [mySym]: "mykey1",
    email: "jack@mail.com"
}
// console.log(person[mySym])
// console.log(person)

// change values within objects

const myObj = {
    name: "Hiren",
    language: "JS",
    experience: ["HTML", "CSS", "JS", "React", "Redux", "Storybook"]
}

// myObj.language = "Python";
// console.log(myObj)
// myObj.company = "Gsoc Techno Labs"



// Object.freez() method : 
// Note:  Prevents the modification of existing property attributes and values, 
// and prevents the addition of new properties.

const newObj = {
    name: "kapil",
    profession: "cricketer",
    skills: ['PHP', 'Pyton', 'Rubi']
}

Object.freeze(newObj);
newObj.experience = ["HTML", "CSS", "Django"];
newObj.company = "Gsoc Techno Labs"
// console.log(newObj)

const employee ={
    name: "Jems",
    Ecode: "J225",
    role: "webDev"
}

employee.greeting = function(){
    console.log(`welcome ${this.name}`)
}

employee.greeting()
employee.name ="John"
employee.greeting()