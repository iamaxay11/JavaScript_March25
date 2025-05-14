// Object Methods: Object.keys(), Object.values(), Object.entries()
let car = { brand: "Toyota", model: "Fortuner" };

console.log(Object.keys(car));     // [ 'brand', 'model' ]
console.log(Object.values(car));   // [ 'Toyota', 'Fortuner' ]
console.log(Object.entries(car));  // [ [ 'brand', 'Toyota' ], [ 'model', 'Fortuner' ] ]


// Object Destructuring
let product = {
    name: "Laptop",
    price: 50000
  };
  
  let { name, price } = product;
  console.log(name);  // Laptop
  console.log(price); // 50000
  

// Object in Array (Common in APIs)
let employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" }
  ];
  
  console.log(employees[0].name); // John

  
//  Check if key exists in object
let obj = { a: 1, b: 2 };
console.log("a" in obj);  // true
console.log("c" in obj);  // false


// Merge Object
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }
