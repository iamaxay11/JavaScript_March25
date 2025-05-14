// Primitive Types- Number, Boolean, String, Undefined, null AND non-primitive types- Object, Array, Function, Date.

console.log("***************************** Data Types ***********************************")

/* Data Types - 
JavaScript has a variety of data types to store different kinds of values. They are classified into primitive and reference types. 

1. Primitive Types: Represent single values and are immutable. 
2. Reference Types: Represent objects and are mutable. */

console.log("***************************** Primitive Types ***********************************")

/* 1. Number - 
Definition: Represents both integer and floating-point numbers.
Examples: 1, -42, 3.14, 0.333 */
console.log("-------- Number: --------");
let num = 42;
let num2 = 3.14;
console.log(num); // o/p -> 42
console.log(num2); // o/p -> 3.14

/* 2. String - 
Definition: Represents sequences of characters enclosed in quotes (single, double, or backticks).
Notes: Strings are immutable.(Immutable: Cannot be changed after creation.)
Examples: 'hello', "world", `Hello, ${name}` */
console.log("-------- String: --------");
let str = "Hello, World!";
console.log(str); // o/p -> Hello, World!

/* 3. Boolean - 
Definition: Represents a logical entity with two possible values: true or false.
Notes: Often used in conditional statements and loops.
Examples: true, false */
console.log("-------- Boolean: --------");
let isTrue = true;
let isFalse = false;
console.log(isTrue); // o/p -> true
console.log(isFalse); // o/p -> false

/* 4. Undefined - 
Definition: Represents a variable that has been declared but not assigned a value.
Notes: The default value of uninitialized variables.
Examples: let x; // undefined */
console.log("-------- Undefined: ---------");
let undef;
console.log(undef); // o/p -> undefined

/* 5. Null - 
Definition: Represents the intentional absence of any object value.
Notes: It is a primitive value that is falsy.
Examples: let y = null; */
console.log("---------- Null: --------");
let emptyValue = null;
console.log(emptyValue); // o/p -> null


console.log("***************************** Reference Types ***********************************")

/* 1. Object - 
Definition: Represents a collection of key-value pairs.
Notes: Keys are strings (or Symbols), values can be any data type.
Examples: { name: "Alice", age: 30 } */
console.log("------- Object: --------");
let person = { name: "Alice", age: 30 };
console.log(person); // o/p -> { name: 'Alice', age: 30 }

/* 2. Array - 
Definition: Represents an ordered collection of values.
Notes: Arrays are zero-indexed and can contain any data type.
Examples: [1, 2, 3], ['a', 'b', 'c'] */
console.log("--------- Array: --------");
let numbers = [1, 2, 3];
let letters = ['a', 'b', 'c'];
console.log(numbers); // o/p -> [1, 2, 3]
console.log(letters); // o/p -> ['a', 'b', 'c']

/* 3. Function - 
Definition: Represents a block of code designed to perform a particular task.
Notes: Functions are objects in JavaScript and can be assigned to variables.
Examples: function greet() { return "Hello"; } */
console.log("-------- Function: --------");
function greet() {
    return "Hello";
}
console.log(greet()); // o/p -> Hello

/* 4. Date - 
Definition: Represents a specific point in time.
Notes: Useful for handling date and time information.
Examples: new Date(), new Date('2024-01-01') */
console.log("-------- Date: --------");
let today = new Date();
console.log(today); // o/p -> Current date and time

// Extra
/* 5. RegExp - 
Definition: Represents regular expressions for pattern matching in strings.
Notes: Useful for searching and manipulating strings based on patterns.
Examples: /abc/, new RegExp('abc') */
console.log("-------- RegExp: --------");
let regex = /abc/;
console.log(regex.test("abcdef")); // o/p -> true


console.log(typeof "hello");    // string
console.log(typeof 42);         // number
console.log(typeof 9007199254740991n); // bigint
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (weird but true!)
console.log(typeof {name: "Sam"}); // object
console.log(typeof Symbol("id"));  // symbol

