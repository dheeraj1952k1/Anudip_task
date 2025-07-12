// let person = {
//   name: "Dheeraj Vishwakarma",
//   age: 22,
//   city: "Delhi",
// };

// // Q1. Printing all keys and values
// for (let key in person) {
//   console.log(key + " ::  " + person[key]);
// }

// // Q2. Adding email and remove city

// person.email = "vishwakarmadheeraj2002@gmail.com";
// delete person.city;

// console.log("After deletion");
// for (let key in person) {
//   console.log(key + " ::  " + person[key]);
// }

// // Q3.
// var res = Object.keys(person).includes("age");
// console.log(res);

// // Q5: count each obj

// function countP(obj) {
//   return Object.keys(obj).length;
// }

// // Q: 4  printing all keys using fun
// function printKeys(obj) {
//   Object.keys(obj).forEach((key) => console.log(key));
// }

// printKeys(person);

let arr = ["a", "b", "c", "d"];

for (let idx in arr) {
  console.log(idx, arr[idx]);
}
