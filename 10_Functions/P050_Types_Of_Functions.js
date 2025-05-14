// 1.Named Function

function greet(){
    console.log("Hello, World!");
};
greet();


// 2.Anonymous Function -> Function without a name, usually assigned to variables.
let greet2 = function() {
    console.log("Hi there!");
  };
  greet2();


// 3.Arrow Functions (Modern Syntax) 
let greet3 = () => {
    console.log("Hi there!");
  };
  greet3();
  
  // Shortcut for one-line functions:
let add = (a, b) => a + b;
console.log(add(2, 3));
  