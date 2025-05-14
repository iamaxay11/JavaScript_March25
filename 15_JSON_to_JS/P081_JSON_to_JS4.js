// Boolean and Numbers

const jsonString = '{"isStudent": true, "score": 85}';

const data = JSON.parse(jsonString);

console.log(data.isStudent); // Output: true
console.log(data.score);     // Output: 85
