// An Array is a special variable that can store multiple values in a single variable.
// Values inside arrays are ordered and indexed starting from 0.

// Array Declaration
let fruits = ["Apple", "Banana", "Mango"]
let cars = new Array("BMW", "Honda", "Audi")

// Access Element from Array
console.log(fruits[1]);
console.log(cars[0]);

// Print Array
console.log(cars)

// Change Element in Array
fruits[2] = "Pipeapple"
console.log(fruits)

// Array Length
console.log(fruits.length)

// Accessing last Array element
console.log(fruits[fruits.length-1])

// We ca have Objects in an Array
let person1 = {
    name : "John",
    age : 30
};
let person2 = {
    name : "Adi",
    age : 27
};

let person = [person1 , person2]

console.log(person)