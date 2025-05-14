// forEach() is a built-in method used to loop through elements of an array.
// It executes a callback function once for each element.

let arr = [1, 2, 3, 4, 5, 6, 7]

// arr.forEach(function printValue(val){
//     console.log(val);
// })

arr.forEach ((val) => {
    console.log(val);
})



let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Example with Index
let cities = ["Delhi", "Mumbai", "Chennai"];

cities.forEach((city, index) => {
  console.log(index + ": " + city);
});
