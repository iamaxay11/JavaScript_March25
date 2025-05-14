// Find sum of only even numbers from array using reduce().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Use the reduce method to iterate and accumulate the sum of even numbers
let sumOfEvens = numbers.reduce(
    function(accumulator, currentValue) {
        // Check if the current number is even
        if (currentValue % 2 === 0) {
            // If it's even, add it to the accumulator (the running sum)
            return accumulator + currentValue;
        } else {
            // If it's odd, just return the accumulator without adding
            return accumulator;
        }
    },
    0 // This is the initial value of the accumulator
);

console.log("Original array:", numbers);
console.log("Sum of even numbers using reduce():", sumOfEvens);
// Expected output: Sum of even numbers using reduce(): 42 (2+4+6+8+10+12)