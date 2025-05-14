console.log("---------- slice() ----------")
// 11.slice(start, end) -> Returns a portion of the array (non-destructive).
// Important: end index is NOT included.
let fruits = ["Apple", "Banana", "Mango", "Orange"]; // 0 -> Apple , 1 -> Banana , 2 -> Mango, 3 -> Orange
let sliced = fruits.slice(1, 3); // from index 1 to index 3 (3 exclusive)
console.log(sliced); // [ 'Banana', 'Mango' ]


console.log("---------- splice() ----------")
// 12.splice(start, deleteCount, item1, item2, …) -> Add/remove/replace elements at a specific position.
// Splice modifies the original array!
fruits = ["Apple", "Banana", "Mango", "Kiwi", "Orange" ];
// Remove 1 element at index 1 and insert "Grapes"
fruits.splice(1, 1, "Grapes");
console.log(fruits); // ["Apple", "Grapes", "Mango", "Kiwi", "Orange"]

fruits.splice(1,3,"Watermelon")
console.log(fruits);


console.log("---------- map() ----------")
// 13.map() -> Transforms each element and returns a new array.
// map returns a new array (original remains same).
let numbers = [1, 2, 3];
let cube = numbers.map(num => num * num * num);
console.log(cube); 


console.log("---------- filter() ----------")
// 14.filter() -> Filters elements based on a condition.
let numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numberz.filter(i => i % 2 === 0);
console.log(evens); 


console.log("---------- reduce() ----------")
// 15.reduce() ->  Reduces array to a single value.
// Often used for sum, multiplication, merging, etc.
let number = [1, 2, 3, 4, 5];
// let sum = number.reduce((accumulator, current) => accumulator + current, 0);
let sum = number.reduce((res , curr) => res + curr)
console.log(sum); // 15



console.log("---------- find() ----------")
// 16.find() -> Finds the first element that satisfies the condition.
numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found); // 12


console.log("---------- findIndex() ----------")
// 17.findIndex() -> Returns the index of the first element satisfying condition.
numbers = [5, 12, 8, 130, 44];
let index = numbers.findIndex(num => num > 100);
console.log(index); // 3


console.log("---------- every() ----------")
// 18.every() -> Checks if every element passes the test.
numbers = [2, 4, 6];
console.log(numbers.every(num => num % 2 === 0)); // true
numbers = [2, 4, 6, 7, 9];
console.log(numbers.every(num => num % 2 === 0)); // false


console.log("---------- some() ----------")
// 19.some() -> Checks if at least one element passes the test.
numbers = [1, 3, 5, 8];
console.log(numbers.some(num => num % 2 === 0)); // true
numbers = [1, 3, 5, 7];
console.log(numbers.some(num => num % 2 === 0)); // false


console.log("---------- sort() ----------")
// 20.sort() -> Sorts element of an array
fruits = ["Apple", "Banana", "Mango", "Kiwi", "Orange" ];
console.log(fruits.sort());
numbers = [4, 2, 3, 8, 6, 9];
console.log(numbers.sort())