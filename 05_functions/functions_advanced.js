function calculateCartTotal(price1) {
  return price1;
}

// console.log(calculateCartTotal(200, 150, 400)); // this will only return 200

// To solve above problem rest and sprade operators are comes in picture

function calculateCartTotal(...price) {
  const total = price.reduce((acc, current) => acc + current, 0);
  return total;
}
// console.log(calculateCartTotal(500, 200, 700, 5000));

// real use case of rest operator in function

function cartTotal(val1, val2, ...price) {
  return { val1, val2, price };
}
// console.log(cartTotal(200, 500, 2000, 6000));

// function with Objects

const user = {
  userName: "Hiren",
  email: "hiren@gmail.com",
};

function handleObject(anyObj) {
  console.log(`Username is ${anyObj.userName} and email is ${anyObj.email}`);
}

handleObject(user);

// another way to pass object in function

handleObject({
  userName: "Sam",
  email: "sam@gmail.com",
});

// function can take Array as an Argument

const myArray = [100, 200, 500, 1000];

function getThirdValue(anyArr) {
  return anyArr[2];
}
console.log(getThirdValue(myArray));
