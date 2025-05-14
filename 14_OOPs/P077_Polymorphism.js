// Polymorphism -> Is the ability to create a variable, a function or an object
// that has more than one form

class Shape{
    draw(){
        return "I am generic shape"
    }
}

class Square extends Shape{
    draw(){
        return "I am Square"
    }
}

class Circle extends Shape{
    draw(){
        return "I am Circle"
    }
}

let s = new Shape()
console.log(s.draw())

s = new Square()
console.log(s.draw())

s = new Circle()
console.log(s.draw())