// for...in loop
// Used to loop over object properties (keys).
// Works best with Objects.
// Returns keys (property names).

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(key + ":", person[key]);
  }

  
//Looping an Array (not recommended, but possible)
let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}
// Note: It loops over the indexes (0, 1, 2) — not values.


// for...of loop
// Used to loop over iterable objects (like Arrays, Strings, Sets, Maps).
// Works best with Arrays, Strings, Sets, Maps.
// Returns values directly (not keys).

// Looping an Array (✅ Best use)
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Looping a String
let greeting = "Hello";

for (let char of greeting) {
  console.log(char);
}