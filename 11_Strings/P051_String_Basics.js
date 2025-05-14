// A String is a sequence of characters enclosed within 
// single quotes (' '), double quotes (" "), or backticks ( ).

let str1 = 'Hello';  // single quotes (' ')
let str2 = "World";  // double quotes (" ")
let str3 = `Hello World`; // Template literals 

// String literal	
let str4 = "hello welcome to JS"; // Type -> String

// String object	
let str5 = new String("hello"); // Type -> Object


// Template Literals (using backticks `)
// Allow embedded expressions (${expression}).
// Can span multiple lines without special characters.

let name = "Alice";
let age = 25;
let greeting = `Hello, ${name}! Your age is ${age}`; // Embedding variable
console.log(greeting); // Output: Hello, Alice!
console.log("Hello,", name, "! Your age is",age)

let multiLine = `
This string
spans
multiple lines.
`;
console.log(multiLine);


//  String Immutability:
// JavaScript strings are immutable. This means once a string is created, its content cannot be changed.
// Any operation that seems to modify a string (like toUpperCase(), replace(), slice()) actually returns a new string. 
// The original string remains unchanged.
let original = "Hello";
let newString = original.toUpperCase();

console.log(original);   // Output: Hello (original is unchanged)
console.log(newString);  // Output: HELLO (a new string is created)



// String Properties:
// length: Returns the number of characters in the string.
let text = "JavaScript";
console.log(text.length); // Output: 10
