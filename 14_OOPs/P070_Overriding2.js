class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Dog barks");
    }
  }
  
  const d = new Dog();
  d.speak();  // Output: Dog barks
// Here, Dog overrides the speak() method of Animal.  