let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log("Sum:", sum);  // Output: 15

// Largest Element in Array
output = numbers.reduce((prev, curr)=>{

   return prev > curr ? prev : curr
})
console.log(output)