// JavaScript has only one number type, called Number, 
// which represents both integers and floating-point values.

let intNum = 10;          // Integer
let floatNum = 10.5;      // Floating-point
let negativeNum = -3.14;  // Negative number


// Number Methods
let x = 123.456;

x.toFixed(2);      // "123.46"  → rounds to 2 decimal places
x.toString();      // "123.456" → converts number to string
x.toPrecision(4);  // "123.5"   → total number of significant digits


// Special Numeric Values
/*
Value          | Meaning
Infinity       | Result of division by 0
-Infinity      | Negative infinite value
NaN            | Not a Number (e.g., 0/0, "abc"/2)
*/


// Convert to Number
Number("123");     // 123
parseInt("123px"); // 123
parseFloat("12.34"); // 12.34


// Check for NaN
isNaN("abc");       // true
isNaN(123);         // false
Number.isNaN("abc"); // false (better method for strict check)
Number.isNaN(NaN);   // true
