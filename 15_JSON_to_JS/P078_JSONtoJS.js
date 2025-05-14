const jsonString = '{"name": "Alice", "age": 25}';

const jsObject = JSON.parse(jsonString);

console.log(jsObject.name); // Output: Alice
console.log(jsObject.age);  // Output: 25