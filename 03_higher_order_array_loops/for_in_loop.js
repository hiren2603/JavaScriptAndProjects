const arr = [10, 20, 30, 40, 50];

for (const key in arr) {
  // console.log(key); // this will print index of an Array
}

for (const key in arr) {
  // console.log(arr[key]); // this will print values of an array
}

const map = new Map();
map.set("IN", "India");
map.set("GR", "German");
map.set("US", "united States of America");
map.set("IN", "India"); // this will be eleminated

for (const key in map) {
  // console.log(key);     // this will not work
}
