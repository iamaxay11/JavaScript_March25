// ✅ Working with Date in JavaScript

// Create a new Date object (current date and time)
let now = new Date();
console.log(now); // Current date and time

// Create a Date with a specific date and time
let specificDate = new Date("2023-12-25T10:30:00");
console.log(specificDate); // Mon Dec 25 2023 10:30:00 GMT...

// Get current year
console.log(now.getFullYear()); // Example: 2025

// Get current month (0-based, January = 0)
console.log(now.getMonth()); // Example: 3 (April)

// Get current date (day of the month)
console.log(now.getDate()); // Example: 29

// Get current day (0 = Sunday, 6 = Saturday)
console.log(now.getDay()); // Example: 2 (Tuesday)

// Get current hour
console.log(now.getHours()); // Example: 14 (2 PM)

// Get current minutes
console.log(now.getMinutes()); // Example: 45

// Get current seconds
console.log(now.getSeconds()); // Example: 10

// Get current milliseconds
console.log(now.getMilliseconds()); // Example: 123

// Get the timestamp (milliseconds since Jan 1, 1970)
console.log(now.getTime()); // Example: 1714381723456

// Set the year
now.setFullYear(2030);
console.log(now.getFullYear()); // 2030

// Set the month (0 = January)
now.setMonth(11); // December
console.log(now.getMonth()); // 11

// Set the date
now.setDate(15);
console.log(now.getDate()); // 15

// Set the hours
now.setHours(9);
console.log(now.getHours()); // 9

// Convert date to string
console.log(now.toString()); // "Sun Dec 15 2030 09:xx:xx GMT+xxxx"

// Convert date to ISO string (useful for JSON)
console.log(now.toISOString()); // "2030-12-15T03:30:00.000Z"

// Convert date to locale-specific string
console.log(now.toLocaleDateString()); // "12/15/2030"
console.log(now.toLocaleTimeString()); // "9:00:00 AM"

// Compare two dates
let date1 = new Date("2025-04-29");
let date2 = new Date("2025-04-30");

console.log(date1 < date2);  // true
console.log(date1.getTime() === date2.getTime()); // false

