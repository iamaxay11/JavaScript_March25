// An object is a collection of key-value pairs.

let person = {
    name: "Alice",
    age: 25,
    isStudent: false
  };

// Accessing Object Properties
// 1. Dot Notation
console.log(person.name);

// 2.Bracket notation
console.log(person["age"])


// Adding, Updating, Deleting property
person.city = "New York";       // Add
person.age = 30;                // Update
delete person.isStudent;        // Delete


// Methods in Object -> A method is a function inside an object.
let user = {
    name: "Raj",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  user.greet(); // Hello, Raj
  

// Looping Through Object
// Use for...in loop:
for (let key in person) {
    console.log(key + ": " + person[key]);
  }

  
// Nested Objects
let student = {
    name: "Ankit",
    address: {
      city: "Delhi",
      pincode: 110001
    }
  };
  
  console.log(student.address.city); // Delhi
  