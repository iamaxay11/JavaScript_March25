//Write a program that prints "Hello, World!" to the console.

console.log("Hello, World!")
/*
// Check the type of different values using typeof.
console.log(typeof "Hello, World!") // Output: string
console.log(typeof 123) // Output: number
console.log(typeof true) // Output: boolean
console.log(typeof undefined) // Output: undefined
console.log(typeof null) // Output: object (null is an object in JavaScript)
console.log(typeof [1, 2, 3]) // Output: object (arrays are also objects)
console.log(typeof { name: "John" }) // Output: object 
*/

// Write a comment explaining what JavaScript is.
// JavaScript is a high-level, interpreted programming language that allows you to write code that runs in a web browser, on a server, or on a device. It is commonly used for web development, data analysis, machine learning, and more.

// Declare a variable and log its value.

let name = 'Priya'
console.log(name) // Output: Priya

// Open the browser console and run some JavaScript commands.

// Use alert() to show a message.

alert('This is an Alert Message'); // run on browser

// Use prompt() to get user input.

let userInput = prompt('Enter your name:');
prompt(`Hello, ${userInput}!`); // Output: Hello, Priya!

// Use confirm() to display a yes/no message.

let confirmation = confirm('Are you sure you want to proceed?');
console.log(confirmation); // Output: true or false


// Write a multi-line comment explaining JavaScript data types.
/*
JavaScript data types include:
1. String: A sequence of characters enclosed in single quotes or double quotes.
2. Number: A number with optional decimal points and/or exponents.
3. Boolean: A value that can be either true or false.
4. Undefined: A variable that has not been assigned a value.
5. Null: A variable that represents the absence of a value.
6. Symbol: A unique value used to identify unique properties.
7. Object: A collection of key-value pairs, where keys are strings and values can be any data type. 
*/

// Write a simple script that adds two numbers and logs the result.

let a= prompt("Enter a number 1");
let b= prompt("Enter a number 2");
let sum = Number(a) + Number(b);
console.log("The sum of " + a + " and " + b + " is: " + sum); // Output: The sum of 10 and 20 is: 30