// A function is a block of reusable code that performs a specific task.

// Function Declaration
function greet(){
    console.log("Hello, World!");
};
greet(); // Function  Invocation


// Function with Parameters
function greet2(name){
    console.log("Hello,",name);
}
greet2("Akshay")


// Function with Return Value
function add(a,b){
    return a+b;
}
let result = add(5,8);
console.log(result)


// Function Parameters vs Arguments
function greetUser(name) {  // name = parameter
    console.log("Hello " + name);
  }
  
  greetUser("Alice"); // "Alice" = argument
  

//Default Parameters (ES6)
function greet(name = "Guest") {
    console.log("Hello, " + name);
  }
  greet();           // Hello, Guest
  greet("John");     // Hello, John
  

// Functions 

  function add (a,b){
    console.log(a+b);
}

let add1 = function(c,d){
    console.log(c+d)
}

let add2 = (e,f)=>{
    console.log(e+f);
}

let add3 =(g,h) => g+h;

add(1,2);
add1(3,4);
add2(5,6);
console.log(add3(7,8))