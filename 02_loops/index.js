// There are 5 types of loop in JS for loop, for in loop, for of loop, do while loop, while loop, forEach loop.

// for(let i=1; i <=5; i++){
//     console.log(i)
// }

// let arr = ['Python', 'JS', 'Node JS', 'React', 'Angular']
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

let persons = [
    {
        name: "John",
        email: "john@gmail.com",
        contact: "9898798987"
    },
    {
        name: "Jen",
        email: "jen@gmail.com",
        contact: "9898198981"
    },
    {
        name: "Josh",
        email: "Josh@gmail.com",
        contact: "9898098980"
    }
]

// for(let i=0; i < persons.length; i++){
//     console.log(persons[i].name, persons[i].email)
// }

// pattern programms

// 1. create left Triangle
// *
// * *
// * * *
// * * * *
// * * * * *

// let string = '';
// for(let i=0; i < 5; i++){
//     for(let j = 0; j <= i; j++){
//         string+="*";
//     }
//     string += "\n"
// }
// console.log(string)

// 2. reverse left triangle
// * * * *
// * * *
// * *
// *

// let n = 5;
// let str = '';
// let space = '';
// for(let i=n; i >= 0; i--){
//     for(let j = 0; j < i; j++){
//         str+="*";
//     }
//     str += "\n"
// }
// console.log(str)


// 3. create Pyramid shape
//     *
//    * *
//   * * *
//  * * * *  


// let line = 5;
// let char = "";

// for(let k=0; k <=line; k++){
//     // printing space
//     for(let l=1; l <= line-k; l++){
//         char += " ";
//     }
//     // printing star
//     for(let m=0; m < 2 * k-1; m++){
//         char += "*"
//     }
//     char += "\n"
// }

// console.log(char)



