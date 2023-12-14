// const test = {
//     prop: 45,
//     funct: function(){
//         return this.prop
//     }
// }
// console.log(test.funct())

const one = {name: "one"}
const two = {name: "two"}

function getThis(){
    return this
}

one.getThis = getThis
two.getThis = getThis

console.log(one.getThis())
console.log(two.getThis())