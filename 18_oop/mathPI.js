let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const chai = {
    name : "ginger chai",
    price: "250",
    isAvailable: true,
    orderChai : function(){
        console.log('chai nahi bani')
    }
}
// console.log(chai)

let chaiDesc = Object.getOwnPropertyDescriptor(chai, 'name')
// console.log(chaiDesc)

Object.defineProperty(chai, 'price',{ 
    writable : false, enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'price'))


/*

Note: once we change object(chai) properties like
{writable: false, enumerable: false}
we could not change value of it as well as while we itterare(loop) over object chai
key value pair of price will not return or key price will be skipped

*/
// for (const [key, value] of Object.entries(chai)) {
//     console.log(`KEY: ${key}, VALUE: ${value} `)
    
// }

// make complete object not itteratable

// Object.defineProperties(chai, {
//    name: {
//         writable: false,
//         enumerable: false
//     },
//     price: {
//         enumerable: false
//     },
//     isAvailable:{
//         enumerable: false
//     }
// })

chai.name = "green tea"

for (const [key, value] of Object.entries(chai)) {
    if(typeof(value) !== 'function'){
        console.log(`${key} : ${value}`)
    }
}
// console.log(chai)