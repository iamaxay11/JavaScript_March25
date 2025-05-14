// Program to print only Even numbers between 1 and 100

console.log("Printing Even numbers (using continue):");
for (let i = 1; i <= 100; i++) {
  
  if (i % 2 !== 0) {
    continue; 
  }
  console.log(i);
}
