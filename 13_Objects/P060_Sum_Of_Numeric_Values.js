let data = { a: 5, b: 10, c: 3 };

let sum = 0;
for (let key in data) {
  sum += data[key];
}

console.log("Total:", sum); // Total: 18