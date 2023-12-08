// Array Reduce method
const myNums = [1, 2, 3];

// Simple Way

const initialValue = 0;
let myTotal = myNums.reduce(function (accumulator, currentValue) {
  console.log(`Acc : ${accumulator}, Current ${currentValue}`);
  return accumulator + currentValue;
}, initialValue);

// console.log(myTotal);

// with Arrow Function

myTotal = myNums.reduce((acc, currentVal) => acc + currentVal, 0);

// console.log(myTotal);

// Real World Example

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Python Basics",
    price: 1999,
  },
  {
    itemName: "Mobile Dev",
    price: 3999,
  },
  {
    itemName: "Data Science",
    price: 9999,
  },
];

const priceTotal = shoppingCart.reduce(
  (acc, currentItem) => acc + currentItem.price,
  0
);
console.log(priceTotal);
