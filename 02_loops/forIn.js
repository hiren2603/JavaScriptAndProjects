// for in loop is used to iterate over objects 

let obj = {
    "herry": 78,
    "rohan": 90,
    "akash": 80
}

for(const key in obj){
    const element = obj[key]
    console.log(key, element)
}