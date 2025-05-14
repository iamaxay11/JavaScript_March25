
// Arithmatic Operators

let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000 (Exponent: 10^3)


// Assignment Operators

let x = 5;
x += 3;  // x = x + 3
console.log(x); // 8

x *= 2;  // x = x * 2
console.log(x); // 16


// Comparison Operators

console.log(5 == "5");    // true (only value compared)
console.log(5 === "5");   // false (value + type compared)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true


// Logical Operators

let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age < 18 || age > 30); // false
console.log(!(age == 20));         // false


// typeOf and instanceOf
let names = "John";
let arr = [1, 2, 3];

console.log(typeof names);        // string
console.log(typeof arr);         // object
console.log(arr instanceof Array); // true

