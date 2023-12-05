let temp = 100;
let convertTo = "cel" 

function convertToCelcious(temp){
    return (temp -32) * (5/9)
}

function convertToFahrenheit(){
    return (temp * (9/5) + 32)
}

if(convertTo == "cel"){
    console.log(convertToCelcious(temp))
}else{
    console.log(convertToFahrenheit(temp))
}