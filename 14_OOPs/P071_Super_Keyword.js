// Super -> The super keyword is used to access and call functions on an object's parent class. 
// It is primarily used in class inheritance.

class Animal{

    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

class Dog extends Animal{

    constructor(name, eat) {
        super(name);
        this.eat = eat;
    }

    eating(){
        console.log("Eating : ",this.eat)
    }

    display(){
        this.printName();
        this.eating();
    }
}
let dog = new Dog("Shina","Bread")
dog.display()