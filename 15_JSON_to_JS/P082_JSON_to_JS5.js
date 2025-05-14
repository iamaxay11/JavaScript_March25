// Multiple Data Types

const jsonString = `
{
  "id": 101,
  "name": "Alice",
  "active": true,
  "hobbies": ["Reading", "Swimming"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
`;

const user = JSON.parse(jsonString);

console.log(user.name);           // Alice
console.log(user.hobbies[1]);     // Swimming
console.log(user.address.city);   // New York
