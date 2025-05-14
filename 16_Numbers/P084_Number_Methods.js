let x = 123.456; // Example number

// toFixed() → Rounds the number to a specific number of decimal places
// Returns a string
console.log(x.toFixed(2)); // "123.46"

// toString() → Converts the number to a string
// Returns a string
console.log(x.toString()); // "123.456"

// toPrecision() → Formats the number to a specific number of significant digits
// Returns a string
console.log(x.toPrecision(4)); // "123.5"

// toExponential() → Converts the number to exponential (scientific) notation
// Returns a string
console.log(x.toExponential(2)); // "1.23e+2"

// Number.isInteger() → Checks if the value is an integer
// Returns true if the value is an integer, otherwise false
console.log(Number.isInteger(123));    // true
console.log(Number.isInteger(123.45)); // false

// Number.parseInt() → Converts a string to an integer
// Returns an integer
console.log(Number.parseInt("123.456")); // 123
console.log(Number.parseInt("123abc"));  // 123

// Number.parseFloat() → Converts a string to a floating-point number
// Returns a float
console.log(Number.parseFloat("123.456")); // 123.456
console.log(Number.parseFloat("123abc"));  // 123

// Math.round() → Rounds a number to the nearest integer
// Returns the rounded integer
console.log(Math.round(4.6));  // 5
console.log(Math.round(4.4));  // 4

// Math.floor() → Rounds a number down to the nearest integer
// Returns the lower integer
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(-4.9)); // -5

// Math.ceil() → Rounds a number up to the nearest integer
// Returns the higher integer
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(-4.1)); // -4

// Math.trunc() → Removes the fractional part of a number
// Returns the integer part
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4

// Math.random() → Generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
// Returns a random number
console.log(Math.random()); // Random number between 0 and 1