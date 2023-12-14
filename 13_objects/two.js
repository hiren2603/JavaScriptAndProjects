// create object using constructor

const singleTonObject = new Object()
singleTonObject.id = "123abc";
singleTonObject.name = "Dino";
singleTonObject.isLoggedIn = false
// console.log(singleTonObject)

const ragularObject ={
    email: "some@something.com",
    name: {
        fullname : {
            firstname: "hiren",
            lastname: "patel"
        }
    }
}

// console.log(ragularObject)
// console.log(ragularObject.name.fullname.firstname)

const nums1 = {1: "a", 2: "b"}
const nums2 = {3: "c", 4: "d"}

// Object.asign()

// const nums3 = Object.assign(nums1, nums2)       //this will copy all values in nums1  
// better approach is
const nums4 = Object.assign({}, nums1, nums2)
// console.log(nums3)
// console.log({...nums1, ...nums2})
// console.log(nums4)
// console.log(nums1)

// sprade syntex

const nums5 = {...nums1, ...nums2}
// console.log(nums5)

// Object.keys()

// console.log(Object.keys(ragularObject))
// console.log(Object.values(ragularObject))

// Object.entries()

// console.log(Object.entries(nums5))

// Object.hasOwnProperty

console.log(nums1.hasOwnProperty(2))

