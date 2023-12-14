const course ={
    courseName: "JS with chai aur Code",
    price: "$99",
    courseInstructor: "Hitesh"
}

const { courseName, price} = course;
// console.log(courseName, price)

// other way
const { courseInstructor: instructor} = course;
// console.log(instructor)


// ----------------- JSON ---------------- //

// {
//     "chanel": "chai aur code",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }