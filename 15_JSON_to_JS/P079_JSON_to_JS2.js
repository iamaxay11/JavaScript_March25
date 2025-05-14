// With Nested Objects

const jsonString = '{"person": {"name": "Bob", "age": 30}}';

const obj = JSON.parse(jsonString);

console.log(obj.person.name); // Output: Bob
console.log(obj.person.age);  // Output: 30
