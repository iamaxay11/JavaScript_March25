// ProtoType -> In JavaScript, every object has a hidden internal property called [[Prototype]] (accessed via .prototype or __proto__) 
// which allows it to inherit properties and methods from another object.

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
  };
  
  const p1 = new Person("Alice");
  p1.greet(); // Hello, Alice

// The method greet is shared among all Person instances through the prototype.  