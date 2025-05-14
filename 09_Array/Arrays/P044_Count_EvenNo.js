let nums = [2, 5, 8, 11, 14];
let count = 0;

nums.forEach((n) => {
  if (n % 2 === 0) count++;
});

console.log("Even numbers:", count); // Output: 3
