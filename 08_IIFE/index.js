// IIFE - Immediately Invoked Function Expressions

// named IIFE
(function chai(){
    // if function will defined with function keyword function called named IIFE function
    console.log("DB connected");
})();

// unnamed IIFE
(
()=>{
    
        console.log(`DB Connected Two`)
})();  

//  we need to put semicolon at the end of function so function scope will be end
//  otherwise it will throw an error .

// --------------------------------------//

// IIFE with arrow function and parameters

( (name)=>{
    console.log(`DB Connected Two ${name}`)
})('Hiren') 