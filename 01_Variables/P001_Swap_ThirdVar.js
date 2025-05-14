const { log } = require("console");

let a =10;
let b =20;

let c;
c = a; // Store the value of a in c
a = b;
b = c;

console.log("Value of a : " +a)
console.log("Value of b : " +b)

