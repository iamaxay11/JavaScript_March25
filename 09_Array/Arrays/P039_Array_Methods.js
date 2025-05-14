// 1.push() -> Adds elements to the end of an array.
let fruits = ["Apple", "Banana"];
console.log("---------- push() ----------")
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]

console.log("---------- pop() ----------")
// 2.pop() -> Removes the last element from an array.
fruits.pop();
console.log(fruits);

console.log("---------- unshift() ----------")
// 3.unshift() -> Adds elememt at start of array
fruits.unshift("Sapota")
console.log(fruits);

console.log("---------- shift() ----------")
// 4.shift() -> Removes first element of an array
fruits.shift()
console.log(fruits);

console.log("---------- lenght ----------")
// 5.length -> returns length of array
console.log(fruits.length);

console.log("---------- indexOf() ----------")
// 6.indexOf() -> Returns the first index where the element is found, or -1 if not found.
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Grapes")); // -1

console.log("---------- includes() ----------")
// 7.includes() -> Returns true/false if an element exists.
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Grapes")); // false

console.log("---------- join() ----------")
// 8.join() -> Joins all array elements into a string.
fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(", ")); // "Apple, Banana, Mango"

console.log("---------- reverse() ----------")
// 9.reverse() -> Reverses the order of elements.
fruits.reverse();
console.log(fruits);

console.log("---------- concat() ----------")
// 10.concat() -> Merges two or more arrays.
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let merged = arr1.concat(arr2);
console.log(merged);
let merged2 = arr1.concat(arr2.concat(arr3))
console.log(merged2)



