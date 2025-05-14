// Multiple classes inherit from a single parent.


class Animal {
    move() {
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Barking...");
    }
  }
  
  class Cat extends Animal {
    meow() {
      console.log("Meowing...");
    }
  }
  
  let myau = new Cat();
myau.meow();
// myau.bark();
myau.move()
