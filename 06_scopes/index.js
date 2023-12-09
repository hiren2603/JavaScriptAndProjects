var a = 300;

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(this);

// ------------------------ ++++++++++++++++++++++++ -------------------------- //

addOne(25);
console.log(addOne(25));
function addOne(num) {
  return num + 1;
}

addTwo(15); // This will throw an error "Cannot access 'addTwo' before initialization"
const addTwo = function (num) {
  return num + 2;
};
