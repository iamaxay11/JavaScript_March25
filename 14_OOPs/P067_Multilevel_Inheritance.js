// Multiple classes inherit from a single parent.

class Animal {
    eat() {
      console.log("Eating...");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Barking...");
    }
  }
  
  class Puppy extends Dog {
    weep() {
      console.log("Weeping...");
    }
  }
  

let abc = new Puppy();
abc.weep();
abc.bark();
abc.eat()
