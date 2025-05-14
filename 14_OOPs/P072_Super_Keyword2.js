// Call a method from the parent class
// You must call super() in the child class constructor before using this.
// super.method() refers to the parent class's method, not the current class's.


class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  class Dog extends Animal {
    speak() {
      super.speak();  // calls Animal's speak()
      console.log("Dog barks");
    }
  }
  
  const dog = new Dog();
  dog.speak();
  // Output:
  // Animal speaks
  // Dog barks
  