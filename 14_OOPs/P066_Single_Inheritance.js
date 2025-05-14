// Inheritance -> 
// JavaScript primarily supports single inheritance, 
// but using prototypes and patterns like mixins, you can simulate more types.


/*
Inheritance Type         | Supported in JS?     | Notes
Single Inheritance       | ✅ Yes               | Most commonly used via extends
Multilevel Inheritance   | ✅ Yes               | Supports multi-level hierarchy
Hierarchical Inheritance | ✅ Yes               | Multiple subclasses from a single superclass
Multiple Inheritance     | ❌ No (Simulated)    | Can be mimicked using mixins and Object.assign()
*/

console.log("---------- Single Inheritance ----------")
class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
class Dog extends Animal {
    bark() {
      console.log("Dog barks");
    }
  }

  let animal = new Dog();
  animal.speak()
  