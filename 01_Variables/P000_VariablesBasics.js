// Variables- var, let, const

// Variables- variables are containers used to store data values. They allow you to reference and manipulate data within your programs

/* Var - 
Scope: var is function-scoped or globally scoped if declared outside any function.
Hoisting: var declarations are hoisted to the top of their scope; accessing them before declaration will result in undefined. 
Re-declaration: var allows re-declaration within the same scope without errors */ 

console.log("***************************** Var ***********************************") 

// Global Scope: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.

var globalVar = "I am global";
function showGlobal() {
    console.log(globalVar); // Accessible here
}

// Function Scope: Variables declared with var within a function are function-scoped. They are accessible only within that function.
function example() {
    var localVa = "I am local";
    console.log(localVa); // Accessible here
}
// console.log(localVar); // Error: localVar is not defined

console.log("---------- Redefinition and Reassignment: var ---------")
var name = "Alice";
console.log(name); // Accessible here  o/p -> Alice
var name = "Bob"; // Redeclaring value 
console.log(name); // Accessible here  o/p -> Bob
name = "Tom"; // Reassigning value
console.log(name);  // o/p -> Tom

console.log("------ Hoisting:var -------")
// Hoisting: When JavaScript code is executed, the variable and function declarations are moved to the top of their respective scopes.
console.log(hoistedVar); // Accessible here // o/p -> Undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // o/p -> I am hoisted

console.log("***************************** Let ***********************************")

/* Let - 
Scope: let is block-scoped. It is only accessible within the block (enclosed by `{}`) where it is declared.
Hoisting: let declarations are hoisted but not initialized. Accessing them before declaration results in a ReferenceError due to the "temporal dead zone."
Re-declaration: let does not allow re-declaration within the same block scope. Attempting to do so results in a SyntaxError. */

console.log("Global Scope:")
let globalLet = "I am global";
function showGlobalLet() {
    console.log(globalLet); // Accessible here
}

console.log("Block Scope:")
function exampleLet() {
    if (true) {
        let blockLet = "I am block scoped";
        console.log(blockLet); // Accessible here
    }
    console.log(blockLet); // Error: blockLet is not defined
}

console.log("------ Hoisting:Let -------")
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am hoisted";
console.log(hoistedLet); // o/p -> I am hoisted

console.log("---------- Redefinition and Reassignment:Let ---------")
// Re-declaration: Cannot be re-declared within the same block.
let nameLet = "Alice";
console.log(nameLet); // o/p -> Alice
// let nameLet = "Bob"; // Error: Identifier 'nameLet' has already been declared
nameLet = "Tom"; // Reassigning value
console.log(nameLet); // o/p -> Tom

console.log("***************************** Const ***********************************")

/* Const - 
Scope: const is block-scoped. It is only accessible within the block (enclosed by `{}`) where it is declared.
Hoisting: const declarations are hoisted but not initialized. Accessing them before declaration results in a ReferenceError due to the "temporal dead zone."
Re-declaration: const does not allow re-declaration within the same block scope. Attempting to do so results in a SyntaxError. Const also does not allow reassignment of the variable. */

console.log("Global Scope:")
const globalConst = "I am global";
function showGlobalConst() {
    console.log(globalConst); // Accessible here
}

console.log("Block Scope:")
function exampleConst() {
    if (true) {
        const blockConst = "I am block scoped";
        console.log(blockConst); // Accessible here
    }
    console.log(blockConst); // Error: blockConst is not defined
}

console.log("-------- Hoisting: const --------")
// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am hoisted";
console.log(hoistedConst); // o/p -> I am hoisted

console.log("-------- Redefinition and Reassignment : const ---------")
// Re-declaration: Cannot be re-declared or reassigned within the same block.
const nameConst = "Alice";
console.log(nameConst); // o/p -> Alice
// const nameConst = "Bob"; // Error: Identifier 'nameConst' has already been declared
// nameConst = "Tom"; // Error: Assignment to constant variable
